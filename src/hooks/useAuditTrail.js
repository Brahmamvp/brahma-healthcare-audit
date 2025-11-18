// src/hooks/useAuditTrail.js

const getStorageKey = (patientId) => `audit_trail_${patientId}`;

/**
 * Fetch the current audit trail for a given patient/case.
 * @param {string} patientId
 * @returns {Array} array of audit events
 */
export const getAuditTrail = (patientId) => {
    const raw = localStorage.getItem(getStorageKey(patientId));
    return raw ? JSON.parse(raw) : [];
};

/**
 * Append a new entry to the patient's audit trail.
 * @param {string} patientId
 * @param {Object} entry - Must include: { action, user, rationale, rule?, stabilityIndex?, compliance? }
 */
export const addAuditEntry = (patientId, entry) => {
    const auditTrail = getAuditTrail(patientId);

    const enrichedEntry = {
        time: new Date().toISOString(),
        user: entry.user || "system",
        action: entry.action || "unspecified action",
        rationale: entry.rationale || "",
        rule: entry.rule || null,
        stabilityIndex: entry.stabilityIndex || null,
        compliance: entry.compliance || 'info',
    };

    const updatedTrail = [...auditTrail, enrichedEntry];
    localStorage.setItem(getStorageKey(patientId), JSON.stringify(updatedTrail));
};

/**
 * Clear the audit trail (for testing/debug/admin tools)
 * @param {string} patientId
 */
export const clearAuditTrail = (patientId) => {
    localStorage.removeItem(getStorageKey(patientId));
};