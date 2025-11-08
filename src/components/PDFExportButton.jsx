// src/components/PDFExportButton.jsx
import React from 'react';

const PDFExportButton = ({ onClick }) => {
  return (
    <div className="flex justify-center my-6">
      <button
        onClick={onClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition"
      >
        📥 Generate Audit Report PDF
      </button>
    </div>
  );
};

export default PDFExportButton;