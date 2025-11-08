// src/components/AuditMetadata.jsx

import React from "react";

const AuditMetadata = ({ caseData }) => {
  const { compliance, time_saved } = caseData;

  return (
    <section className="bg-white shadow rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">🧾 Audit Metadata</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(compliance).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="capitalize text-gray-600">{key.replace(/([A-Z])/g, " $1")}</span>
            <span className={value ? "text-green-600" : "text-red-600"}>
              {value ? "✅ Compliant" : "❌ Missing"}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          ⏱️ Traditional documentation time: <strong>{time_saved.traditional_minutes} minutes</strong>
        </p>
        <p>
          ⚡ Brahma audit generation time: <strong>{time_saved.brahma_seconds} seconds</strong>
        </p>
      </div>
    </section>
  );
};

export default AuditMetadata;