// src/components/CaseSelector.jsx
import React from 'react';

const mockCases = [
    { id: '1', name: 'Pneumonia Case 1', status: 'In Review' },
    { id: '2', name: 'Sepsis Audit 22', status: 'Complete' },
    { id: '3', name: 'Discharge Readmission 5', status: 'High Priority' },
];

const CaseSelector = ({ currentCaseName, onCaseChange }) => {
    return (
        <div className="relative p-4 rounded-xl 
                        bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-lg 
                        flex items-center justify-between font-light text-white/90">

            <h3 className="text-xl font-light text-white/70 mr-4">
                Current Case:
            </h3>

            {/* Selector Dropdown Placeholder */}
            <select 
                value={currentCaseName}
                onChange={onCaseChange}
                className="flex-grow p-2 pl-4 pr-10 rounded-lg appearance-none 
                           bg-white/[0.08] border border-white/[0.1] text-white cursor-pointer
                           focus:outline-none focus:border-neon-blue transition-all"
            >
                {mockCases.map((caseItem) => (
                    <option key={caseItem.id} value={caseItem.name}>
                        {caseItem.name} - ({caseItem.status})
                    </option>
                ))}
            </select>
            
            {/* Custom Dropdown Arrow Icon */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-none text-white/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </div>
        </div>
    );
};

export default CaseSelector;