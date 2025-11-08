// src/components/AuditTrailViewer.jsx
import React from 'react';

const AuditTrailViewer = ({ rationale, differentials, modelVersion }) => {
  return (
    <section className="bg-white shadow-md rounded-md p-6 space-y-4">
      <h2 className="text-xl font-semibold mb-2">🔍 Diagnostic Reasoning</h2>
      <ul className="list-disc ml-6 text-sm text-gray-800">
        {rationale.map((reason, idx) => (
          <li key={idx}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-md font-semibold mt-4">🧪 Differentials Considered</h3>
      <ul className="ml-4">
        {differentials.map((diff, idx) => (
          <li key={idx} className="text-sm">
            <strong>{diff.condition}</strong> ({(diff.probability * 100).toFixed(1)}%) – ruled out by {diff.ruled_out_by}
          </li>
        ))}
      </ul>

      <p className="text-xs text-gray-500 mt-4">Model version: {modelVersion}</p>
    </section>
  );
};

export default AuditTrailViewer;