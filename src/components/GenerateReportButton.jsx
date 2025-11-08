// src/components/GenerateReportButton.jsx

import React from "react";

const GenerateReportButton = ({ onGenerate }) => {
  return (
    <button
      onClick={onGenerate}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow transition duration-150"
    >
      🧠 Generate Audit Report
    </button>
  );
};

export default GenerateReportButton;