// src/components/PDFPreview.jsx

import React, { memo, useMemo } from "react";

const PDFPreview = ({ auditData }) => {
  const formattedJson = useMemo(() => {
    if (!auditData) {
      return "No audit data available.";
    }

    return JSON.stringify(auditData, null, 2);
  }, [auditData]);

  return (
    <div className="w-full border border-gray-300 rounded-md bg-white p-4 shadow">
      <h2 className="text-lg font-bold mb-2 text-gray-800">📄 Audit Report Preview</h2>
      <pre className="whitespace-pre-wrap text-sm text-gray-700 overflow-auto max-h-[400px]">
        {formattedJson}
      </pre>
    </div>
  );
};

export default memo(PDFPreview);