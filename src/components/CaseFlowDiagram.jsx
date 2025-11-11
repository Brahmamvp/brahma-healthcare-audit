// components/CaseFlowDiagram.jsx
import React from 'react';
import AuditNode from './AuditNode';

const CaseFlowDiagram = () => {
  const compliantItems = [
    {
      title: 'Compliant',
      code: 'CMS SEP-1.f',
      description: 'Repeat lactic acid measurement',
      status: 'compliant',
    },
  ];

  const nonCompliantItems = [
    {
      title: 'Non-Compliant',
      code: 'CMS SEP-1.a',
      description: 'Initiation of broad-spectrum antibiotics',
      status: 'non-compliant',
    },
  ];

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center h-full w-full gap-12 p-10">
      {/* Left Column */}
      <div className="flex flex-col items-end gap-6">
        {nonCompliantItems.map((item, idx) => (
          <AuditNode key={idx} {...item} />
        ))}
      </div>

      {/* Center Connector Orb */}
      <div className="relative flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-400 via-blue-500 to-purple-400 animate-pulse shadow-2xl" />
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-start gap-6">
        {compliantItems.map((item, idx) => (
          <AuditNode key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CaseFlowDiagram;