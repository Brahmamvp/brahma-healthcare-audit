// src/components/AuditMetadata.jsx
import React from 'react';

const AuditMetadata = ({ caseData }) => {
    // Mock metadata structure
    const metadata = [
        { label: 'Patient ID', value: 'PNEU-8734' },
        { label: 'Audit Date', value: '2025-11-10' },
        { label: 'Attending Physician', value: 'Dr. Jane Smith' },
        { label: 'Case Severity', value: 'High', color: 'text-red-400' },
    ];

    return (
        <div className="relative p-6 rounded-2xl 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-lg 
                        text-white/80 h-full">

            {/* Title with subtle divider line */}
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
                Case Metadata
            </h3>
            <div className="mb-4 h-px bg-white/10"></div>
            
            {/* Metadata List */}
            <dl className="space-y-4">
                {metadata.map((item, index) => (
                    <div key={index} className="flex justify-between items-center relative">
                        {/* Label (Blueprint style) */}
                        <dt className="text-sm font-light text-white/60 uppercase tracking-wider">
                            {item.label}
                        </dt>
                        
                        {/* Value (Accent style) */}
                        <dd className={`text-base font-medium ${item.color || 'text-white'}`}>
                            {item.value}
                        </dd>
                        
                        {/* Subtle accent dot on the left */}
                        <span className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neon-blue"></span>
                    </div>
                ))}
            </dl>
            
            {/* Faint corner accents */}
            <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-white/20"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-white/20"></div>
        </div>
    );
};

export default AuditMetadata;