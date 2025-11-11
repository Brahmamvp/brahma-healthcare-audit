// src/data/CasesData.js

export const caseOptions = [
  { key: "pneumonia_case_1", label: "Pneumonia Case 1" },
  { key: "pneumonia_case_2", label: "Pneumonia Case 2" },
];

export const cases = {
  pneumonia_case_1: {
    patient: {
      id: "001",
      age: 58,
      gender: "Female",
      symptoms: ["Fever", "Cough", "Shortness of breath"],
      history: ["Hypertension"],
    },
    diagnosis: {
      condition: "Pneumonia",
      confidence: 0.94,
      rationale: ["Chest x-ray showed infiltrates", "Elevated CRP", "History of exposure"],
    },
    differentials: [
      { condition: "COVID-19", probability: 0.03, ruled_out_by: "Negative PCR" },
      { condition: "Bronchitis", probability: 0.02, ruled_out_by: "No sputum or wheeze" },
    ],
    compliance: {
      reviewed_symptoms: true,
      documented_rationale: true,
      ruled_out_differentials: true,
      followed_protocol: true,
    },
    time_saved: {
      traditional_minutes: 22,
      brahma_seconds: 17,
    },
  },

  pneumonia_case_2: {
    patient: {
      id: "002",
      age: 70,
      gender: "Male",
      symptoms: ["Cough", "Fatigue", "Loss of appetite"],
      history: ["COPD", "Diabetes"],
    },
    diagnosis: {
      condition: "Atypical Pneumonia",
      confidence: 0.89,
      rationale: ["Gradual onset", "Dry cough", "No consolidation"],
    },
    differentials: [
      { condition: "Tuberculosis", probability: 0.06, ruled_out_by: "Negative PPD" },
      { condition: "Lung Cancer", probability: 0.05, ruled_out_by: "No mass on imaging" },
    ],
    compliance: {
      reviewed_symptoms: true,
      documented_rationale: true,
      ruled_out_differentials: true,
      followed_protocol: false,
    },
    time_saved: {
      traditional_minutes: 27,
      brahma_seconds: 23,
    },
  },
};