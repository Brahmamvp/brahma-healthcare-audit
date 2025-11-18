// src/components/AuditMetadata.jsx

import React from 'react';

const AuditMetadata = ({ caseData }) => {
    
    const getStatusColor = (status) => {
        switch (status) {
            case 'High Risk':
                return 'bg-red-900/40 text-red-300 border-red-500/30';
            case 'Low Risk':
                return 'bg-green-900/40 text-green-300 border-green-500/30';
            case 'Normal':
            default:
                return 'bg-blue-900/40 text-blue-300 border-blue-500/30';
        }
    };

    const statusClass = getStatusColor(caseData.status);

    return (
        <div className="p-6 rounded-3xl 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl h-full">
            
            <h3 className="text-xl font-light text-white mb-4 tracking-wide border-b border-white/10 pb-3">
                Audit Metadata
            </h3>

            {/* Status Indicator */}
            <div className={`flex items-center justify-center p-3 rounded-xl mb-6 ${statusClass}`}>
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-lg font-semibold uppercase tracking-wider">
                    {caseData.status}
                </span>
            </div>

            {/* Key Data Points */}
            <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Case ID:</span>
                    <span className="font-mono font-medium text-white">{caseData.caseId}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Audit Date:</span>
                    <span className="font-medium text-white">{caseData.date}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Priority:</span>
                    <span className="font-medium text-white">{caseData.priority}</span>
                </div>

                {/* Auditor Highlighted */}
                <div className="flex justify-between items-center text-sm pt-2 border-t border-white/10">
                    <span className="text-white/60">Auditor:</span>
                    <span className="font-bold text-indigo-400">{caseData.auditor}</span>
                </div>
            </div>
        </div>
    );
};

export default AuditMetadata;
