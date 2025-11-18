// src/components/AuditToolsPanel.jsx
import React from 'react';
import { getMcpCallLog } from '../utils/mcpClientWrapper';

const AuditToolsPanel = ({ onReset }) => {
  const handleDownload = () => {
    const log = getMcpCallLog();
    const blob = new Blob([JSON.stringify(log, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `audit-trail-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl text-white space-y-3 text-sm">
      <h3 className="text-white/80 font-semibold tracking-wide">Audit Trail Controls</h3>
      <p className="text-white/50">Download or clear audit trail entries stored during this session.</p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
          onClick={handleDownload}
        >
          Download JSON
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
          onClick={onReset}
        >
          Clear Audit Trail
        </button>
      </div>
    </div>
  );
};

export default AuditToolsPanel;