// src/components/AuditTrailDashboard.jsx

import React, { useState } from 'react';
import { getMcpCallLog } from '../utils/mcpClientWrapper';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for react-chartjs-2 v4

const AuditTrailDashboard = () => {
    const [showRawLog, setShowRawLog] = useState(false);
    const log = getMcpCallLog();

    // Aggregate scope usage and case frequency
    const scopeUsage = {};
    const caseFrequency = {};
    log.forEach(entry => {
        scopeUsage[entry.scope] = (scopeUsage[entry.scope] || 0) + 1;
        caseFrequency[entry.caseId] = (caseFrequency[entry.caseId] || 0) + 1;
    });

    const caseChartData = {
        labels: Object.keys(caseFrequency),
        datasets: [
            {
                label: 'Access Count per Case',
                data: Object.values(caseFrequency),
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
            },
        ],
    };

    const scopeChartData = {
        labels: Object.keys(scopeUsage),
        datasets: [
            {
                label: 'Scope Usage Count',
                data: Object.values(scopeUsage),
                backgroundColor: 'rgba(34, 197, 94, 0.6)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-white mb-6 tracking-wide">📊 MCP Audit Trail Analytics</h2>

            <div className="mb-12">
                <h3 className="text-lg font-semibold text-white mb-4">Access Count by Case ID</h3>
                <Bar data={caseChartData} />
            </div>

            <div className="mb-12">
                <h3 className="text-lg font-semibold text-white mb-4">Data Scope Usage Frequency</h3>
                <Bar data={scopeChartData} />
            </div>

            <div className="mb-8">
                <button
                    onClick={() => setShowRawLog(!showRawLog)}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded shadow"
                >
                    {showRawLog ? 'Hide Raw Audit Log' : 'Show Raw Audit Log'}
                </button>

                {showRawLog && (
                    <pre className="mt-4 text-white/80 text-xs bg-black/30 p-4 rounded-lg max-h-96 overflow-y-auto">
                        {JSON.stringify(log, null, 2)}
                    </pre>
                )}
            </div>
        </div>
    );
};

export default AuditTrailDashboard;