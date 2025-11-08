// src/components/ComplianceChecklist.jsx
import React from 'react';

const ComplianceChecklist = ({ checklist }) => {
  return (
    <section className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-2">✅ Compliance Checklist</h2>
      <ul className="list-disc ml-6 text-sm">
        {checklist.map((item, idx) => (
          <li key={idx} className={item.passed ? 'text-green-600' : 'text-red-600'}>
            {item.label} {item.passed ? '✔️' : '❌'}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ComplianceChecklist;