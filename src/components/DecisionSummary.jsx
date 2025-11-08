// src/components/DecisionSummary.jsx
import React from 'react';

const DecisionSummary = ({ diagnosis, patient }) => {
  return (
    <section className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-2">📄 Diagnosis Summary</h2>
      <p><strong>Patient:</strong> {patient.name}, {patient.age} y/o</p>
      <p><strong>Diagnosis:</strong> {diagnosis.condition}</p>
      <p><strong>Confidence:</strong> {(diagnosis.confidence * 100).toFixed(1)}%</p>
    </section>
  );
};

export default DecisionSummary;