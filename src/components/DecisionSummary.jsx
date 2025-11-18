// src/components/DecisionSummary.jsx

import React from 'react';

const DecisionSummary = ({ caseData }) => {
    // Determine the status text for the Decision Summary title
    const overallStatus = caseData.rules.some(rule => !rule.compliant) ? "Non-Compliant" : "Compliant";
    
    // Filter the rules into two groups
    const nonCompliantRules = caseData.rules.filter(rule => !rule.compliant);
    const compliantRules = caseData.rules.filter(rule => rule.compliant);

    // Combine rules for display order (Non-Compliant first)
    const displayRules = [...nonCompliantRules, ...compliantRules];

    return (
        <div className="relative p-8 rounded-3xl overflow-hidden 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl">
            
            <h2 className="text-4xl font-light text-white mb-2 tracking-wide">
                Healthcare Audit
            </h2>
            <p className="text-xl font-light text-white/70 mb-8">{caseData.caseName}</p>

            {/* Architectural Timeline Grid */}
            <div className="grid grid-cols-2 gap-8 relative z-10">
                
                {/* --- Left Column: Summary Boxes --- */}
                <div className="flex flex-col space-y-6">
                    {displayRules.map((rule, index) => {
                        const isNonCompliant = !rule.compliant;
                        const statusClass = isNonCompliant 
                            ? 'text-red-400 bg-red-800/20 border-red-500/30'
                            : 'text-green-400 bg-green-800/20 border-green-500/30';
                        
                        return (
                            <div 
                                key={rule.id} 
                                className={`p-5 rounded-xl border transition-all duration-300
                                            ${statusClass} hover:shadow-xl hover:shadow-current/10`}
                            >
                                <p className="text-sm font-semibold uppercase opacity-80 mb-1">
                                    {isNonCompliant ? 'Non-Compliant' : 'Compliant'}
                                </p>
                                <p className="text-2xl font-bold tracking-tight mb-2 text-white">
                                    {rule.id}
                                </p>
                                <p className="text-base font-light opacity-80">
                                    {rule.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* --- Right Column: Detail Lines and Analysis --- */}
                <div className="relative flex flex-col space-y-6">
                    
                    {/* Vertical Connection Line */}
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-white/10 ml-6"></div>

                    {displayRules.map((rule, index) => {
                        const isNonCompliant = !rule.compliant;
                        const detailClass = isNonCompliant 
                            ? 'text-red-400 border-red-500/30'
                            : 'text-green-400 border-green-500/30';
                        
                        return (
                            <div key={rule.id} className="relative pt-2 pl-12">
                                {/* Connection Dot */}
                                <div className={`absolute top-4 left-[20px] w-4 h-4 rounded-full border-2 
                                                 ${detailClass} bg-gray-950/80`}></div>
                                
                                <p className="text-lg font-light text-white mb-2 leading-relaxed">
                                    <span className="font-semibold">{rule.id} Analysis:</span>
                                    <br />
                                    <span className="text-white/70">{rule.detail}</span>
                                </p>
                                <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${detailClass} bg-white/5`}>
                                    Status: {rule.compliant ? 'Compliant' : 'Non-Compliant'}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* Overall Status Banner (Subtle indicator at the bottom) */}
            <div className={`absolute bottom-0 left-0 w-full text-center py-2 text-sm font-semibold 
                            ${overallStatus === 'Non-Compliant' ? 'bg-red-900/40 text-red-300' : 'bg-green-900/40 text-green-300'} 
                            pointer-events-none`}>
                Overall Audit Status: {overallStatus}
            </div>
        </div>
    );
};

export default DecisionSummary;
