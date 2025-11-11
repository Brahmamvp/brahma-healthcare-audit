import React, { useEffect, useState } from "react";
import { useClaudeAnalysis } from "../hooks/useClaudeAnalysis";

const ClaudeAnalysis = ({ caseData }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      setLoading(true);
      const data = await useClaudeAnalysis(caseData);
      setResult(data);
      setLoading(false);
    };
    fetchAnalysis();
  }, [caseData]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <p className="text-gray-500">Analyzing case with Claude...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-indigo-700">Claude Diagnostic Analysis</h2>
      <div>
        <p className="font-semibold">Summary:</p>
        <p className="text-gray-700">{result.summary}</p>
      </div>
      <div>
        <p className="font-semibold">Clinical Rationale:</p>
        <p className="text-gray-700">{result.rationale}</p>
      </div>
      <div>
        <p className="font-semibold">Suggested Improvements:</p>
        <ul className="list-disc list-inside text-gray-700">
          {result.suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
      {result.red_flags.length > 0 && (
        <div className="bg-red-100 text-red-800 rounded p-3 border border-red-300">
          <p className="font-semibold">⚠️ Red Flags Detected:</p>
          <ul className="list-disc list-inside">
            {result.red_flags.map((flag, i) => (
              <li key={i}>{flag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClaudeAnalysis;