// src/components/CaseSummary.jsx

import React from "react";

const CaseSummary = ({ caseData }) => {
  if (!caseData) return null;

  const { patient, diagnosis } = caseData;

  return (
    <div className="bg-white shadow-md rounded-md p-6 border border-gray-200 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">🧾 Case Summary</h2>
      <div className="text-sm text-gray-700 space-y-1">
        <p><strong>Patient ID:</strong> {patient.id}</p>
        <p><strong>Age / Gender:</strong> {patient.age} / {patient.gender}</p>
        <p><strong>Symptoms:</strong> {patient.symptoms.join(", ")}</p>
        <p><strong>History:</strong> {patient.history.join(", ")}</p>
        <p><strong>Primary Diagnosis:</strong> {diagnosis.condition} ({(diagnosis.confidence * 100).toFixed(1)}%)</p>
        <p><strong>Model Version:</strong> {diagnosis.model_version}</p>
      </div>
    </div>
  );
};

export default CaseSummary;