// src/components/RawAuditDebugger.jsx
import React, { useState, useEffect } from 'react';
import { getMcpCallLog } from '../utils/mcpClientWrapper';

const RawAuditDebugger = () => {
  const [visible, setVisible] = useState(false);
  const [log, setLog] = useState([]);

  useEffect(() => {
    const debugMode = new URLSearchParams(window.location.search).get('debug');
    if (debugMode === 'true') {
      setVisible(true);
      setLog(getMcpCallLog());
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 right-0 w-full max-w-2xl p-6 bg-black/80 text-white text-xs z-50 overflow-auto rounded-t-xl border-t border-white/10 shadow-xl max-h-[50vh]">
      <h4 className="text-sm font-bold text-white mb-2">🧪 Raw MCP Audit Log</h4>
      <pre className="whitespace-pre-wrap text-green-300">
        {JSON.stringify(log, null, 2)}
      </pre>
    </div>
  );
};

export default RawAuditDebugger;