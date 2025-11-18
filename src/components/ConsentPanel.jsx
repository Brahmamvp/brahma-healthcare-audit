// src/components/ConsentPanel.jsx

import React, { useState } from 'react';
import { mcpFetch } from '../utils/mcpClientWrapper';
// Optional: Wire when ready
// import { useAuditTrail } from '../hooks/useAuditTrail';

const ConsentPanel = ({ patientId }) => {
    const [consentGranted, setConsentGranted] = useState(false);
    const [fetchStatus, setFetchStatus] = useState(null);
    const [fetchResponse, setFetchResponse] = useState(null);
    const [timestamp, setTimestamp] = useState(null);

    // const { addAuditEntry } = useAuditTrail() || {};

    const consentRequest = {
        scope: "Observation.LacticAcid, Medication.Order, Provider.ID",
        purpose: "Sepsis Compliance Audit (SEP-1 Protocol)",
        retention: "PHI Access Logs retained for 6 years (HIPAA)",
    };

    const handleConsentToggle = async () => {
        const newConsentState = !consentGranted;
        setConsentGranted(newConsentState);

        console.log(`MCP Consent for Patient ${patientId} is now: ${newConsentState ? 'GRANTED' : 'REVOKED'}`);

        if (newConsentState) {
            try {
                const result = await mcpFetch({
                    scope: consentRequest.scope,
                    purpose: consentRequest.purpose,
                    retention: consentRequest.retention,
                    patientId,
                });

                setFetchStatus('success');
                setFetchResponse(result);
                setTimestamp(new Date().toLocaleString());

                // Optional audit log
                // addAuditEntry?.({
                //     type: 'MCP_CONSENT',
                //     status: 'GRANTED',
                //     timestamp: Date.now(),
                //     scope: consentRequest.scope,
                //     patientId,
                //     response: result,
                // });

                console.log("MCP Fetch Success:", result);

            } catch (error) {
                setFetchStatus('error');
                setFetchResponse(error?.message || 'Unknown error');
                setTimestamp(new Date().toLocaleString());
                console.error("MCP Fetch Error:", error);
            }
        } else {
            // Revoking consent
            setFetchStatus(null);
            setFetchResponse(null);
            setTimestamp(null);
        }
    };

    return (
        <div className="relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl">
            <h2 className="text-3xl font-light text-white mb-6 tracking-wide">
                Model Context Protocol (MCP) Interop
            </h2>
            <p className="text-sm text-white/70 mb-6 italic">
                All external data and model calls are gated by explicit, scope-limited consent, aligning with the "Minimum Necessary" HIPAA principle.
            </p>

            <div className={`p-5 rounded-xl border-2 transition-colors duration-300 ${
                consentGranted 
                    ? 'border-green-500/50 bg-green-900/20' 
                    : 'border-red-500/50 bg-red-900/20'
            }`}>
                <div className="flex justify-between items-start mb-4">
                    <p className="text-lg font-semibold text-white">
                        Consent Status for Data Ingestion
                    </p>
                    <button
                        onClick={handleConsentToggle}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                            consentGranted 
                                ? 'bg-red-600 hover:bg-red-700' 
                                : 'bg-green-600 hover:bg-green-700'
                        }`}
                    >
                        {consentGranted ? 'Revoke Consent' : 'Grant Consent'}
                    </button>
                </div>

                <p className={`text-5xl font-extrabold ${consentGranted ? 'text-green-400' : 'text-red-400'} mb-4`}>
                    {consentGranted ? 'ACCESS GRANTED' : 'ACCESS DENIED'}
                </p>

                <div className="mt-4 border-t border-white/10 pt-4 text-sm space-y-2">
                    <p className="font-medium text-white/80">Requested Scope (MCP Resource Manifest):</p>
                    <p className="text-yellow-300 bg-black/30 p-2 rounded font-mono">
                        {consentRequest.scope}
                    </p>
                    <p><span className="font-medium text-white/80">Purpose:</span> {consentRequest.purpose}</p>
                    <p><span className="font-medium text-white/80">Retention Policy:</span> {consentRequest.retention}</p>
                </div>

                {consentGranted && (
                    <div className="mt-6 text-xs text-white/70 space-y-2 bg-white/5 p-4 rounded-lg border border-white/10">
                        <p className="font-semibold uppercase tracking-wider text-white/80">Last MCP Request:</p>
                        <p>Status: 
                            <span className={`ml-2 font-bold ${fetchStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                {fetchStatus?.toUpperCase() || 'N/A'}
                            </span>
                        </p>
                        {timestamp && <p>Timestamp: {timestamp}</p>}
                        {fetchResponse && (
                            <pre className="text-white/70 text-xs bg-black/20 p-2 rounded overflow-auto max-h-40">
                                {typeof fetchResponse === 'object' 
                                    ? JSON.stringify(fetchResponse, null, 2) 
                                    : fetchResponse}
                            </pre>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-4 text-xs text-white/50">
                Data access is controlled by the MCP Router, which logs this interaction as part of the immutable Execution Manifest.
            </div>
        </div>
    );
};

export default ConsentPanel;