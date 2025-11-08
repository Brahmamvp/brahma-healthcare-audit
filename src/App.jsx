// src/App.jsx

import React from "react";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import ExportOptions from "./components/ExportOptions";
import CaseSummary from "./components/CaseSummary";
import AuditMetadata from "./components/AuditMetadata";
import { fixedPneumoniaCase } from "./data/fixedPneumoniaCase";
import jsPDF from "jspdf";

function App() {
  const handleExportPDF = () => {
    const doc = new jsPDF();

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
  };

  const handleExportJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(fixedPneumoniaCase, null, 2)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `brahma_audit_${fixedPneumoniaCase.patient.id}.json`;
    link.click();
  };

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