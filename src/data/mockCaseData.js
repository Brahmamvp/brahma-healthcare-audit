// src/data/mockCaseData.js

const mockAuditTrailOne = [
    { time: '10:05 AM', user: 'System', action: 'Case PNEU-8734 opened for review.', compliance: 'info', rule: null },
    { time: '10:07 AM', user: 'Dr. Smith', action: 'Ordered Vancomycin (Narrow Spectrum).', compliance: 'fail', rule: 'SEP-1.a' },
    { time: '10:15 AM', user: 'System', action: 'Rule SEP-1.a check: Failed (Antibiotics not broad-spectrum).', compliance: 'fail', rule: 'SEP-1.a' },
    { time: '12:00 PM', user: 'Nurse Jones', action: 'Lactic Acid measurement taken (4.2 mmol/L).', compliance: 'info', rule: null },
    { time: '04:30 PM', user: 'Nurse Jones', action: 'Lactic Acid repeated (1.8 mmol/L).', compliance: 'pass', rule: 'SEP-1.f' },
    { time: '04:35 PM', user: 'System', action: 'Rule SEP-1.f check: Passed (Follow-up completed within 6 hours).', compliance: 'pass', rule: 'SEP-1.f' },
];

const mockAuditTrailTwo = [
    { time: '08:00 AM', user: 'System', action: 'Case SEPSIS-22 opened.', compliance: 'info', rule: null },
    { time: '08:05 AM', user: 'Dr. Lee', action: 'Ordered Broad-Spectrum Antibiotics (Zosyn).', compliance: 'pass', rule: 'SEP-1.a' },
    { time: '08:10 AM', user: 'System', action: 'Rule SEP-1.a check: Passed.', compliance: 'pass', rule: 'SEP-1.a' },
    { time: '09:00 AM', user: 'Nurse Tom', action: 'Lactic Acid measurement taken (5.5 mmol/L).', compliance: 'info', rule: null },
    { time: '03:00 PM', user: 'System', action: 'Lactic Acid follow-up overdue.', compliance: 'fail', rule: 'SEP-1.f' },
];

export const allCasesData = [
    {
        caseName: "Pneumonia Case 1",
        rules: [
            { id: 'SEP-1.a', description: 'Initiation of broad-spectrum antibiotics', compliant: false, detail: 'Antibiotics were not broad-spectrum as ordered.' },
            { id: 'SEP-1.f', description: 'Repeat lactic acid measurement', compliant: true, detail: 'Follow-up measurement completed within 6 hours.' },
        ],
        auditTrail: mockAuditTrailOne,
    },
    {
        caseName: "Sepsis Audit 22",
        rules: [
            { id: 'SEP-1.a', description: 'Initiation of broad-spectrum antibiotics', compliant: true, detail: 'Appropriate broad-spectrum antibiotics were initiated.' },
            { id: 'SEP-1.f', description: 'Repeat lactic acid measurement', compliant: false, detail: 'Follow-up measurement was not completed within the required timeframe.' },
        ],
        auditTrail: mockAuditTrailTwo,
    },
];

export const initialCaseData = allCasesData[0];

export const mockCasesList = allCasesData.map(c => ({ 
    id: c.caseName.replace(/\s/g, '-'), 
    name: c.caseName, 
    status: c.caseName === 'Pneumonia Case 1' ? 'In Review' : 'Complete' 
}));
