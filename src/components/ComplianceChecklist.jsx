// src/components/ComplianceChecklist.jsx

import React from 'react';

const ComplianceChecklist = ({ caseData }) => {
    return (
        <div className="relative p-8 rounded-3xl 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl">
            <h2 className="text-3xl font-light text-white mb-6 tracking-wide">
                Full Compliance Checklist
            </h2>

            <div className="space-y-6">
                {caseData.rules.map((rule) => {
                    const isCompliant = rule.compliant;
                    const statusColor = isCompliant ? 'text-green-400' : 'text-red-400';
                    const hoverClass = isCompliant ? 'hover:border-green-400/50' : 'hover:border-red-400/50';

                    return (
                        <div 
                            key={rule.id} 
                            className={`flex items-start p-4 rounded-xl transition-all duration-300 
                                        bg-white/[0.05] border border-white/[0.1] ${hoverClass}`}
                        >
                            {/* Icon */}
                            <div className={`flex-shrink-0 w-6 h-6 mr-4 mt-1 ${statusColor}`}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        // Conditional Icon: Checkmark for Compliant, X for Non-Compliant
                                        d={isCompliant 
                                            ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                                            : "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"} 
                                    />
                                </svg>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-medium text-white">
                                    {rule.id}: {rule.description}
                                </h3>
                                
                                <p className={`text-sm font-semibold mt-1 ${statusColor}`}>
                                    Status: {isCompliant ? 'Compliant' : 'Non-Compliant'}
                                </p>

                                <p className="text-sm text-white/70 mt-2 italic">
                                    {rule.detail}
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
