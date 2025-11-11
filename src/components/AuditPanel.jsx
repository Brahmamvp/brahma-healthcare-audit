// src/components/AuditPanel.jsx

import React from 'react';

const AuditPanel = () => {
    // Handlers for the non-working buttons
    const handleRunAudit = () => {
        console.log("Action: Starting new audit process...");
        alert("Simulating: Starting new audit process!");
    };

    const handleExportReport = () => {
        console.log("Action: Exporting report...");
        alert("Simulating: Report generation started. Check downloads.");
    };

    // Mock status data (unchanged)
    const statusMetrics = [
        // ... (data remains the same) ...
        { label: 'Data Sources', value: '4/4 Active', color: 'text-green-400', icon: "M5 13l4 4L19 7" },
        { label: 'Pending Audits', value: '3 Cases', color: 'text-yellow-400', icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: 'API Health', value: '99.8% Uptime', color: 'text-green-400', icon: "M9 12l2 2 4-4m5.636-4.364a9 9 0 010 12.728l-4.243-4.242-4.242 4.242-4.243-4.242-4.243 4.242a9 9 0 0112.728 0z" },
    ];

    return (
        <div className="relative p-6 rounded-3xl 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-xl 
                        flex items-center justify-between space-x-6">

            {/* --- Left Side: Action Buttons --- */}
            <div className="flex space-x-4">
                <button 
                    onClick={handleRunAudit} // <-- Added handler
                    className="flex items-center gap-2 px-5 py-3 rounded-full 
                                   bg-neon-blue hover:bg-neon-blue/80 text-white font-medium 
                                   transition-colors duration-200 shadow-lg shadow-neon-blue/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.836 2l1.626 1.626M10 18H5a2 2 0 01-2-2v-3a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2h-5m-1-4l4 4-4 4M10 18V9"/>
                    </svg>
                    Run New Audit
                </button>

                <button 
                    onClick={handleExportReport} // <-- Added handler
                    className="flex items-center gap-2 px-5 py-3 rounded-full 
                                   bg-red-700/50 hover:bg-red-700/70 text-white font-medium 
                                   transition-colors duration-200 border border-red-500/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Export Report
                </button>
            </div>

            {/* --- Right Side: Status Metrics --- (unchanged) */}
            <div className="flex space-x-6 relative z-10">
                {statusMetrics.map((metric, index) => (
                    <div key={index} className="text-right border-l border-white/10 pl-6">
                        <p className="text-sm font-light text-white/50 uppercase tracking-widest">{metric.label}</p>
                        <div className="flex items-center justify-end mt-1">
                            <span className={`text-xl font-semibold ${metric.color}`}>{metric.value}</span>
                            <svg className={`w-5 h-5 ml-2 ${metric.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={metric.icon}/>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {/* Subtle background overlay (unchanged) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-y-0 left-[35%] w-px bg-white/20"></div>
            </div>
        </div>
    );
};

export default AuditPanel;
