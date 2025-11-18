// src/utils/driftDetectionEngine.js

// Simulated Audit Memory Ledger (stores rationale snapshots)
const auditMemoryLedger = [];

/**
 * Creates an entry in the Audit Memory Ledger (Provenance).
 * This fulfills Step 2: auditTrail.push() calls.
 * @param {object} entry - The audit trail/ledger data.
 */
export const pushAuditLedgerEntry = (entry) => {
    const defaultEntry = {
        time: new Date().toISOString(),
        user: 'AuditEngine',
        action: 'Reasoning Snapshot',
        rationale: 'No rationale provided.',
        stabilityIndex: 100,
        ...entry,
    };
    auditMemoryLedger.push(defaultEntry);
    console.log(`[Ledger Logged] Action: ${defaultEntry.action} | Stability: ${defaultEntry.stabilityIndex}%`);
    return defaultEntry;
};

/**
 * Simulates computing a Drift Score (cosine delta).
 * In a real app, this would compare vector embeddings of rationales.
 * @param {number} currentStability - The current stability score.
 * @returns {number} The new stability score.
 */
export const computeDriftDelta = (currentStability = 100) => {
    // Basic simulation: random drop of 0-10 points, capped at a minimum
    const drift = Math.floor(Math.random() * 11); // 0 to 10
    const newStability = Math.max(90, currentStability - drift); 
    return newStability;
};

export const getAuditMemoryLedger = () => auditMemoryLedger;
