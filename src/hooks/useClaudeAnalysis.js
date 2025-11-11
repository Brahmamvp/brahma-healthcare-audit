export const useClaudeAnalysis = async (caseData) => {
  // Simulate API latency
  await new Promise((r) => setTimeout(r, 1500));

  const { diagnosis, compliance } = caseData;

  // Simulated reasoning logic
  return {
    summary: `This case involves a diagnosis of ${diagnosis.condition} with a confidence of ${Math.round(
      diagnosis.confidence * 100
    )}%.`,
    rationale: `Claude confirmed the diagnosis aligns with reported symptoms and history. AI reasoning matched CDC guidelines for evaluation of suspected respiratory infections.`,
    suggestions: [
      "Double-check imaging results to rule out comorbidities.",
      "Reassess vitals 24 hours post-intervention.",
      "Ensure patient follow-up is scheduled within 3–5 days."
    ],
    red_flags: Object.values(compliance).includes(false)
      ? ["Non-compliance detected in at least one guideline step."]
      : [],
  };
};