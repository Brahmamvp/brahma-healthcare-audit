import React, { useState } from "react";

/**
 * AIAnalysis.jsx
 * ----------------------------------------------
 * Handles AI-driven analysis of compliance data.
 * Currently uses a local simulation but ready for Claude / GPT endpoints.
 */

const AIAnalysis = ({ caseData }) => {
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setAnalysis(null);

    // Simulate delay (mocking real AI API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 🔮 Simulated AI logic — replace with real API call later
    const simulatedResult = {
      complianceScore: Math.floor(70 + Math.random() * 25),
      insights: [
        "Model version properly tracked (✅)",
        "Bias mitigation procedures present (✅)",
        "Missing patient notification record (⚠️)",
        "Clinical rationale documentation strong (✅)",
        "Impact assessment incomplete (❌)",
      ],
      nextSteps: [
        "Add patient notification documentation to audit trail",
        "Complete impact assessment per state policy SB 1893",
      ],
    };

    setAnalysis(simulatedResult);
    setIsAnalyzing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          🧠 AI Compliance Analysis
        </h2>
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className={`px-4 py-2 rounded-md text-white transition ${
            isAnalyzing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {isAnalyzing ? "Analyzing..." : "Run Analysis"}
        </button>
      </div>

      {/* 🌀 Loading state */}
      {isAnalyzing && (
        <div className="text-gray-500 text-sm animate-pulse">
          Running AI compliance reasoning...
        </div>
      )}

      {/* ✅ Results */}
      {analysis && (
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-1">
              Compliance Score
            </h3>
            <div className="text-3xl font-bold text-indigo-600">
              {analysis.complianceScore}%
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-700 mb-1">Insights</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {analysis.insights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-700 mb-1">
              Recommended Next Steps
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {analysis.nextSteps.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAnalysis;