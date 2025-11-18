// src/components/ExecutionPanel.jsx

import React from 'react';

const ExecutionPanel = ({ caseId }) => {
    // --- Mock Data for the Execution Manifest ---
    // In a real application, this data would be fetched from the immutable Audit Ledger.
    const manifestData = {
        computeBoundary: 'US-East (HIPAA-VPC, On-Prem Proxy)',
        modelVersion: 'ClinicalAudit-LLM-v4.1.2 (Validated 2025-10-01)',
        phiAccessed: ['Patient.ID', 'Observation.LacticAcid', 'Medication.Order', 'Provider.ID'],
        encryptionState: 'PHI Encrypted at Rest & Transit (AES-256)',
        lastAuditDate: '2025-11-12T01:00:00Z',
        manifestHash: 'SHA256: 0587506a...f71d4a6b',
        hipaaRetention: '6 Years (WORM Storage)',
        euAiActRisk: 'High-Risk System (Validated)',
    };

    const details = [
        { label: "Compute Boundary", value: manifestData.computeBoundary, icon: "M10 20a10 10 0 100-20 10 10 0 000 20z", color: "text-green-400" },
        { label: "Model Version", value: manifestData.modelVersion, icon: "M10 20a10 10 0 100-20 10 10 0 000 20z", color: "text-indigo-400" },
        { label: "Encryption Status", value: manifestData.encryptionState, icon: "M10 20a10 10 0 100-20 10 10 0 000 20z", color: "text-green-400" },
        { label: "Manifest Hash", value: manifestData.manifestHash, icon: "M10 20a10 10 0 100-20 10 10 0 000 20z", color: "text-blue-400" },
    ];

    return (
        <div className="relative p-8 rounded-3xl 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl">
            
            <h2 className="text-3xl font-light text-white mb-6 tracking-wide">
                Verifiable Sovereignty: Execution Manifest
            </h2>
            <p className="text-sm text-white/50 mb-6 italic">
                This manifest proves where compute ran, what data was accessed, and is stored as an immutable HIPAA audit log artifact.
            </p>

            {/* Core Manifest Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-b border-white/10 pb-6">
                {details.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{item.label}</p>
                        <p className={`text-sm font-medium mt-1 text-white/90`}>{item.value.split(' ')[0]}</p>
                        <p className={`text-xs ${item.color}/70`}>{item.value.substring(item.value.indexOf(' ') + 1)}</p>
                    </div>
                ))}
            </div>

            {/* Data Accessed (PHI Scoping) */}
            <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-2">PHI Fields Accessed (Minimum Necessary Principle):</p>
                <div className="flex flex-wrap gap-2">
                    {manifestData.phiAccessed.map((field, index) => (
                        <span key={index} className="px-3 py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-500/30">
                            {field}
                        </span>
                    ))}
                </div>
            </div>

            {/* Regulatory Summary */}
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.362a9.001 9.001 0 01-12.728 0m12.728 0A9.001 9.001 0 007.05 18.05M5.618 5.638a9.001 9.001 0 000 12.728m0-12.728h.01M19 12a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <p className="text-sm text-white/80">
                        HIPAA Audit Log Retention: <span className="font-bold text-white">{manifestData.hipaaRetention}</span>
                    </p>
                    <p className="text-sm text-white/80 ml-6">
                        EU AI Act Classification: <span className="font-bold text-red-300">{manifestData.euAiActRisk}</span>
                    </p>
                </div>
                
                <button 
                    className="px-4 py-2 text-sm rounded-full bg-red-700/50 hover:bg-red-700/70 text-white font-medium transition-colors duration-200 border border-red-500/30">
                    Download Audit Packet
                </button>
            </div>
        </div>
    );
};

export default ExecutionPanel;
