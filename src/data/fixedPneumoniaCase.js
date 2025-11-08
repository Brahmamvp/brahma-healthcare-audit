// src/data/fixedPneumoniaCase.js

export const fixedPneumoniaCase = {
  patient: {
    id: "PX-203984",
    age: 64,
    gender: "Male",
    symptoms: ["Fever", "Productive cough", "Dyspnea"],
    history: ["Smoker", "Hypertension"],
  },
  diagnosis: {
    condition: "Community-acquired pneumonia",
    confidence: 0.92,
    rationale: [
      "Bilateral infiltrates on chest X-ray",
      "Fever + productive cough + dyspnea cluster",
      "Elevated WBC count (15,000/μL)",
      "Patient age + smoking history increases risk"
    ],
    model_version: "BrahmaDx-1.0",
  },
  differentials: [
    {
      condition: "COVID-19",
      probability: 0.05,
      ruled_out_by: "Recent negative PCR",
    },
    {
      condition: "Lung cancer",
      probability: 0.02,
      ruled_out_by: "Acute onset, no weight loss",
    }
  ],
  compliance: {
    rationaleDocumented: true,
    modelVersionTracked: true,
    differentialsConsidered: true,
    hipaaCompliant: true,
    stateAuditReady: true,
    fdaAligned: true,
  },
  time_saved: {
    traditional_minutes: 6,
    brahma_seconds: 8,
  }
};