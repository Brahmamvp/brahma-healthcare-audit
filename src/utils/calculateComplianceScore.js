export const calculateComplianceScore = (compliance) => {
  const entries = Object.values(compliance);
  const total = entries.length;
  const passed = entries.filter((v) => v).length;
  return Math.round((passed / total) * 100);
};