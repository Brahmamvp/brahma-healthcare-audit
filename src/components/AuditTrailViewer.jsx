// src/components/AuditTrailViewer.jsx

import React from 'react';

// NEW: Define the helper function for icons and colors
const getIcon = (complianceStatus) => {
    switch (complianceStatus) {
        case 'pass':
            return { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: 'text-green-400 border-green-400' };
        case 'fail':
            return { icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z", color: 'text-red-400 border-red-400' };
        case 'info':
        default:
            return { icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: 'text-blue-400 border-blue-400' };
    }
};

const AuditTrailViewer = ({ caseData }) => {
    const auditTrail = caseData?.auditTrail || [];

    // ... (the rest of the component uses getIcon, which is now defined) ...
    // e.g., line 26: const { icon, color } = getIcon(event.compliance);

    return (
        <div className="relative p-8 rounded-3xl overflow-hidden 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl">

            <h2 className="text-3xl font-light text-white mb-6 tracking-wide">
                Audit Provenance Timeline
            </h2>
            
            {/* Timeline Container */}
            <div className="space-y-8 border-l-2 border-white/10 ml-4 pl-8">
                {auditTrail.map((event, index) => {
                    const { icon, color } = getIcon(event.compliance); // This line now works
                    const isComplianceCheck = event.rule !== null;
                    const isDriftAlert = event.stabilityIndex && event.stabilityIndex < 90;

                    return (
                        <div key={index} className="relative">
                            
                            {/* Timeline Dot/Icon */}
                            <div className={`absolute -left-12 top-0 w-8 h-8 rounded-full flex items-center justify-center 
                                             ring-4 ring-gray-950 ${color} bg-gray-900 shadow-md`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}/>
                                </svg>
                            </div>

                            {/* Content */}
                            <div className={`p-4 rounded-xl transition-all border border-white/[0.05]
                                             ${isComplianceCheck ? 'bg-white/[0.05] hover:bg-white/[0.1]' : 'bg-white/[0.02]'}`}>
                                <p className="text-sm font-mono text-white/50 mb-1">{event.time} - {event.user}</p>
                                <p className="text-xl font-light text-white leading-snug mb-3">
                                    {event.action}
                                </p>
                                
                                {/* Provenance Detail (Rationale) */}
                                {event.rationale && (
                                    <div className="mt-2 pt-2 border-t border-white/10">
                                        <p className="text-xs font-semibold uppercase text-white/50 mb-1">
                                            Model Rationale / Audit Ledger Entry:
                                        </p>
                                        <p className={`text-sm italic ${isDriftAlert ? 'text-yellow-300' : 'text-white/80'}`}>
                                            {event.rationale}
                                        </p>
                                    </div>
                                )}

                                {/* Rule and Stability Tags */}
                                <div className="mt-3 flex space-x-3">
                                    {event.rule && (
                                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${color.replace('400', '300')} bg-white/5 border border-white/10`}>
                                            Rule: {event.rule}
                                        </span>
                                    )}
                                    {event.stabilityIndex && (
                                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full 
                                                         ${isDriftAlert ? 'text-red-400 bg-red-900/40' : 'text-indigo-400 bg-indigo-900/40'}`}>
                                            Stability Index: {event.stabilityIndex}% {isDriftAlert ? ' (Drift Alert)' : ''}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AuditTrailViewer;
