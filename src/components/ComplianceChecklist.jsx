// src/components/ComplianceChecklist.jsx
import React from 'react';

// This component expects a list of rules from caseData
const ComplianceChecklist = ({ caseData }) => {
    const rules = caseData?.rules || [];

    if (rules.length === 0) {
        return (
             <div className="relative p-6 rounded-3xl bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-lg text-center text-white/50">
                <p>No rules defined for this compliance audit.</p>
            </div>
        );
    }

    return (
        <div className="relative p-8 rounded-3xl overflow-hidden 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl
                        font-light text-white/90">

            <h2 className="text-3xl font-light text-white mb-8 tracking-wide">
                Full Compliance Checklist
            </h2>
            
            {/* Rule List Container */}
            <div className="space-y-4">
                {rules.map((rule, index) => {
                    const statusColor = rule.compliant ? 'text-green-400' : 'text-red-400';
                    const iconPath = rule.compliant 
                        ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check circle
                        : "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"; // X circle

                    return (
                        <div key={index} className="flex items-start p-4 rounded-xl transition-all 
                                                    bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05]">
                            
                            {/* Status Icon */}
                            <div className={`flex-shrink-0 w-6 h-6 mr-4 mt-1 ${statusColor}`}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}/>
                                </svg>
                            </div>

                            {/* Rule Details */}
                            <div className="flex-grow">
                                <p className="text-xl font-medium text-white mb-1">
                                    <span className="font-mono text-sm uppercase mr-3 opacity-60">CMS {rule.id}</span>
                                    {rule.description}
                                </p>
                                <p className={`text-sm ${rule.compliant ? 'text-green-300/70' : 'text-red-300/70'}`}>
                                    Status: {rule.compliant ? 'Compliant' : 'Non-Compliant'}
                                </p>
                                {/* Detailed Reason (Appears on hover or focus in a final UI) */}
                                <p className="text-xs text-white/50 mt-1">
                                    Detail: {rule.detail}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ComplianceChecklist;