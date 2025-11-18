// src/data/mockCaseData.js

// --- 1. Audit Trail Definition (Your provided code) ---
const mockAuditTrailOne = [
    { 
        time: '10:05 AM', user: 'System', action: 'Case PNEU-8734 opened for review.', compliance: 'info', rule: null, 
        rationale: 'System initialized based on Sepsis Screening Alert (Lactic Acid 4.2 mmol/L).', 
        stabilityIndex: 100, // Starting point
    },
    // ... (rest of your mockAuditTrailOne entries here) ...
    { 
        time: '04:35 PM', user: 'System', action: 'Rule SEP-1.f check: Passed (Follow-up completed within 6 hours).', compliance: 'pass', rule: 'SEP-1.f', 
        rationale: 'Formal compliance check for SEP-1.f passed based on timing.', 
        stabilityIndex: 100, 
    },
];

// --- 2. Full Case Data Definitions ---
// Define the structure for Case 1 (Non-Compliant Example)
const mockCaseDataOne = {
    caseId: 'PNEU-8734',
    caseName: 'Sepsis Protocol Failure (PNEU-8734)',
    status: 'High Risk',
    outcome: 'Decision: Non-Compliant',
    priority: 'Urgent',
    date: '2025-11-12',
    auditor: 'AI Sentinel 3.1',
    // THIS USES THE NEW AUDIT TRAIL:
    auditTrail: mockAuditTrailOne, 
    rules: [
        { id: 'SEP-1.a', compliant: false, description: 'Broad-spectrum antibiotic administered within 1 hour.', detail: 'Only Vancomycin was administered, failing to meet the broad-spectrum requirement.' },
        { id: 'SEP-1.b', compliant: true, description: 'Fluid resuscitation initiated within 3 hours.', detail: '30ml/kg Crystalloid bolus was initiated at 10:10 AM, meeting the compliance window.' },
        { id: 'SEP-1.f', compliant: true, description: 'Lactate level repeated within 6 hours.', detail: 'Repeat lactate was measured at 4:30 PM, completing the follow-up requirement.' },
    ],
};

// Define the structure for Case 2 (Compliant Example)
const mockCaseDataTwo = {
    caseId: 'HF-5501',
    caseName: 'Heart Failure Review (HF-5501)',
    status: 'Low Risk',
    outcome: 'Decision: Compliant',
    priority: 'Normal',
    date: '2025-11-10',
    auditor: 'AI Sentinel 3.1',
    auditTrail: [ 
        // Example audit trail for case 2 (keep it simple for this fix)
        { time: '09:00 AM', user: 'System', action: 'Case HF-5501 opened for review.', compliance: 'info', rule: null, rationale: 'Initial review of discharge documentation.', stabilityIndex: 100 },
        { time: '09:15 AM', user: 'Dr. Johnson', action: 'Documented discharge instructions.', compliance: 'pass', rule: 'HF-1.c', rationale: 'Discharge instructions cover all required domains: medication, follow-up, and warning signs.', stabilityIndex: 100 },
    ],
    rules: [
        { id: 'HF-1.a', compliant: true, description: 'ACE inhibitor or ARB prescribed.', detail: 'Lisinopril 10mg was prescribed at discharge.' },
        { id: 'HF-1.b', compliant: true, description: 'Beta-blocker prescribed.', detail: 'Metoprolol 50mg was prescribed.' },
        { id: 'HF-1.c', compliant: true, description: 'Comprehensive discharge instructions provided.', detail: 'Instructions provided and documented.' },
    ],
};

// --- 3. Final Export Statements (The critical fix!) ---

// 1. Define the variable being imported by App.jsx
export const initialCaseData = mockCaseDataOne; 

// 2. Define the list of all cases
export const allCasesData = [
    mockCaseDataOne,
    mockCaseDataTwo,
];

// 3. Define the list for the Case Selector dropdown
export const mockCasesList = allCasesData.map(c => c.caseName);

