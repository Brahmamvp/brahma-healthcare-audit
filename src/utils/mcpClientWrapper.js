// src/utils/mcpClientWrapper.js

const CONSENT_STATUS = { GRANTED: true, REVOKED: false };

// Simulated persistent log storage (e.g., a local array or database)
const mcpCallLog = [];

export const getCurrentConsentStatus = (patientId) => {
    const status = localStorage.getItem(`mcp_consent_${patientId}`);
    return status === 'GRANTED';
};

export const setConsentStatus = (patientId, status) => {
    localStorage.setItem(`mcp_consent_${patientId}`, status ? 'GRANTED' : 'REVOKED');
};

/**
 * Wraps an API call to enforce MCP (Consent, Scope, Logging).
 * @param {object} options - { url, scope, patientId }
 */
export const mcpFetch = async ({ url = "EHR/FHIR/patient-data", scope, patientId }) => {
    if (!getCurrentConsentStatus(patientId)) {
        console.error(`MCP Access Blocked: Consent is REVOKED for patient ${patientId}.`);
        return { success: false, data: null, message: "Consent Revoked" };
    }

    const logEntry = {
        time: new Date().toISOString(),
        patientId,
        url,
        scope,
        status: 'GRANTED',
        manifestId: `MCP-${Date.now()}`,
    };

    mcpCallLog.push(logEntry);
    console.log(`[MCP Logged] ACCESS GRANTED: ${scope} for ${patientId}`);

    // Simulate successful data retrieval
    const mockData = { patientId, data: 'Mock Scoped Data' };
    return { success: true, data: mockData };
};

export const getMcpCallLog = () => mcpCallLog;