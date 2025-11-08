// src/components/ExportOptions.jsx

import React from "react";

const ExportOptions = ({ onExportPDF, onExportJSON }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
      <button
        onClick={onExportPDF}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow transition duration-200"
      >
        📄 Export PDF Report
      </button>
      <button
        onClick={onExportJSON}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-md shadow transition duration-200"
      >
        🧾 Export JSON Log
      </button>
    </div>
  );
};

export default ExportOptions;