// src/components/ComplianceScore.jsx
import React from 'react';
import ScoreGauge from './ScoreGauge'; // <-- Import the new component

const ComplianceScore = ({ caseData }) => {
    // 1. Calculate the actual score from the rules array
    const totalRules = caseData.rules.length;
    const compliantRules = caseData.rules.filter(rule => rule.compliant).length;
    
    // Calculate score (0 to 100, rounded)
    const score = totalRules > 0 ? Math.round((compliantRules / totalRules) * 100) : 0;

    // Determine status text based on score
    let statusText = "High Compliance";
    let statusColor = "text-green-500";
    if (score < 70) {
        statusText = "Moderate Risk";
        statusColor = "text-yellow-500";
    }
    if (score < 50) {
        statusText = "High Risk";
        statusColor = "text-red-500";
    }

    return (
        <div className="relative p-6 rounded-3xl 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl 
                        flex flex-col items-center justify-center">

            <h3 className="text-xl font-medium text-white/90 mb-4 uppercase tracking-wider">
                Overall Compliance
            </h3>

            {/* Integrate the ScoreGauge */}
            <div className="mb-4">
                <ScoreGauge score={score} />
            </div>

            {/* Status Indicator */}
            <div className="flex flex-col items-center mt-2">
                <p className={`text-lg font-semibold ${statusColor}`}>
                    {statusText}
                </p>
                <p className="text-sm text-white/50 mt-1">
                    {compliantRules} of {totalRules} rules compliant.
                </p>
            </div>
        </div>
    );
};

export default ComplianceScore;
