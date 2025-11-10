// src/App.jsx

import React, { useCallback, useEffect, useRef } from "react";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import ExportOptions from "./components/ExportOptions";
import CaseSummary from "./components/CaseSummary";
import AuditMetadata from "./components/AuditMetadata";
import { fixedPneumoniaCase } from "./data/fixedPneumoniaCase";

function App() {
  const jsPdfModuleRef = useRef(null);

  const loadJsPdf = useCallback(async () => {
    if (!jsPdfModuleRef.current) {
      jsPdfModuleRef.current = import("jspdf")
        .then((module) => module.default ?? module.jsPDF)
        .catch((error) => {
          jsPdfModuleRef.current = null;
          throw error;
        });
    }

    const resolvedModule = await jsPdfModuleRef.current;

    if (!resolvedModule) {
      throw new Error("Failed to load jsPDF module.");
    }

    return resolvedModule;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    let idleCallbackId;
    let timeoutId;

    const preloadJsPdf = () => {
      loadJsPdf().catch(() => {
        // Swallow preload errors; the user action handler will surface any issues.
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      idleCallbackId = window.requestIdleCallback(preloadJsPdf);
    } else {
      timeoutId = window.setTimeout(preloadJsPdf, 1500);
    }

    return () => {
      if (
        idleCallbackId != null &&
        typeof window.cancelIdleCallback === "function"
      ) {
        window.cancelIdleCallback(idleCallbackId);
      }

      if (timeoutId != null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [loadJsPdf]);

  const handleExportPDF = useCallback(async () => {
    try {
      const JsPdfConstructor = await loadJsPdf();
      const doc = new JsPdfConstructor();

      const { patient, diagnosis, differentials, compliance, time_saved } = fixedPneumoniaCase;

      doc.setFontSize(18);
      doc.text("Brahma Healthcare Audit Report", 20, 20);

      doc.setFontSize(12);
      doc.text(`Patient ID: ${patient.id}`, 20, 35);
      doc.text(`Age: ${patient.age}`, 20, 42);
      doc.text(`Gender: ${patient.gender}`, 20, 49);
      doc.text(`Symptoms: ${patient.symptoms.join(", ")}`, 20, 56);
      doc.text(`History: ${patient.history.join(", ")}`, 20, 63);

      doc.text(`\nDiagnosis: ${diagnosis.condition}`, 20, 75);
      doc.text(`Confidence: ${Math.round(diagnosis.confidence * 100)}%`, 20, 82);
      doc.text("Rationale:", 20, 90);
      diagnosis.rationale.forEach((r, i) => {
        doc.text(`- ${r}`, 25, 97 + i * 7);
      });

      const offset = 97 + diagnosis.rationale.length * 7 + 10;
      doc.text("Differential Diagnoses:", 20, offset);
      differentials.forEach((diff, i) => {
        doc.text(
          `- ${diff.condition} (${Math.round(diff.probability * 100)}%) — Ruled out by: ${diff.ruled_out_by}`,
          25,
          offset + 10 + i * 7
        );
      });

      const finalOffset = offset + 10 + differentials.length * 7 + 10;
      doc.text("Compliance:", 20, finalOffset);
      Object.entries(compliance).forEach(([key, value], i) => {
        doc.text(`- ${key}: ${value ? "✅" : "❌"}`, 25, finalOffset + 10 + i * 7);
      });

      doc.text(
        `\nTime Saved: Traditional - ${time_saved.traditional_minutes} min vs Brahma - ${time_saved.brahma_seconds} sec`,
        20,
        finalOffset + 60
      );

      doc.save(`brahma_audit_${patient.id}.pdf`);
    } catch (error) {
      console.error("Failed to export PDF report:", error);
    }
  }, [loadJsPdf]);

  const handleExportJSON = useCallback(() => {
    try {
      const jsonBlob = new Blob(
        [JSON.stringify(fixedPneumoniaCase, null, 2)],
        { type: "application/json" }
      );
      const url = URL.createObjectURL(jsonBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `brahma_audit_${fixedPneumoniaCase.patient.id}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to export JSON report:", error);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <HeaderBar />
      <main className="flex-grow px-6 py-8 space-y-8">
        <CaseSummary caseData={fixedPneumoniaCase} />
        <AuditMetadata caseData={fixedPneumoniaCase} />
        <ExportOptions
          onExportPDF={handleExportPDF}
          onExportJSON={handleExportJSON}
        />
      </main>
      <FooterBar />
    </div>
  );
}

export default App;