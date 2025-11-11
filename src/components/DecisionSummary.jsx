// src/components/DecisionSummary.jsx

import React from 'react';

// Define the component to accept a 'caseData' prop
const DecisionSummary = ({ caseData }) => {
  // CRITICAL: Robust data check (prevents errors if data fails to load)
  if (!caseData || !caseData.rules || caseData.rules.length === 0) {
    return (
      <div className="relative p-12 h-[500px] flex items-center justify-center rounded-3xl 
                      bg-white/[0.03] backdrop-blur-lg border border-red-500/30 shadow-xl 
                      text-center text-red-400">
        <p className="text-2xl font-light">Error: No compliance data loaded for this case.</p>
      </div>
    );
  }

  const rules = caseData.rules;
  const nonCompliantRule = rules.find(r => !r.compliant) || {};
  const compliantRule = rules.find(r => r.compliant) || {};

  return (
    <div className="relative w-full p-10 rounded-3xl overflow-hidden 
                    bg-white/[0.03] backdrop-blur-lg border border-white/[0.1] shadow-2xl
                    font-light text-white/90">
      
      {/* --- Overall Diagrammatic Overlay / Grid Lines (Faint, spanning the whole panel) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* --- Header Section (Now integrated into the component) --- */}
      <header className="mb-12 relative z-10 text-center">
        <h1 className="text-5xl font-extralight text-white mb-2 tracking-wide font-serif">
          Healthcare Audit
        </h1>
        <p className="text-2xl font-light text-white/70 font-serif">
          {caseData.caseName}
        </p>
      </header>

      {/* --- Main Content Grid --- */}
      <div className="grid grid-cols-2 gap-16 relative z-10">
        
        {/* --- Left Column: Key Decisions Summary --- */}
        <div className="flex flex-col space-y-12 pr-8">
          
          {/* Non-Compliant Block */}
          <div className="relative p-6 rounded-2xl bg-white/[0.04] border border-red-500/30 shadow-lg group">
            {/* Top-left accent glow */}
            <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-red-500/50 blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
            
            <h2 className="text-xl font-semibold text-red-400 mb-2">Non-Compliant</h2>
            <p className="text-3xl font-normal text-white mb-2">CMS {nonCompliantRule.id}</p>
            <p className="text-white/70 text-lg leading-relaxed">
              {nonCompliantRule.description}
            </p>
          </div>

          {/* Compliant Block */}
          <div className="relative p-6 rounded-2xl bg-white/[0.04] border border-green-500/30 shadow-lg group">
             {/* Top-left accent glow */}
            <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-green-500/50 blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>

            <h2 className="text-xl font-semibold text-green-400 mb-2 mt-8">Compliant</h2>
            <p className="text-3xl font-normal text-white mb-2">CMS {compliantRule.id}</p>
            <p className="text-white/70 text-lg leading-relaxed">
              {compliantRule.description}
            </p>
          </div>
        </div>

        {/* --- Central Diagrammatic Connector Line --- */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none">
          {/* Main vertical line with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-400/40 via-white/30 to-green-400/40 opacity-70"></div>
          
          {/* Non-Compliant glowing node */}
          <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-red-400/70 border border-white/50 shadow-[0_0_10px_2px_rgba(252,165,165,0.7)]"></div>
          
          {/* Central animated pulsing node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/80 border border-white/90 shadow-[0_0_15px_3px_rgba(255,255,255,0.7)] animate-pulse-slow"></div>
          
          {/* Compliant glowing node */}
          <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-green-400/70 border border-white/50 shadow-[0_0_10px_2px_rgba(134,239,172,0.7)]"></div>
        </div>

        {/* --- Right Column: Detailed View / Diagrammatic Breakdown --- */}
        <div className="flex flex-col space-y-12 pl-8 pt-10">
          
          {/* Non-Compliant Detailed Card */}
          <div className="relative p-6 rounded-2xl bg-white/[0.04] border border-white/[0.1] shadow-lg group">
            <h3 className="text-xl font-semibold text-white mb-2">CMS {nonCompliantRule.id} Analysis</h3>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Detailed breakdown of why **"{nonCompliantRule.description}"** was non-compliant.
            </p>
            {/* Subtle internal gradient/diagram lines */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 opacity-50 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.01] to-white/[0.02] rounded-2xl pointer-events-none"></div>
            
            {/* Connection point (dot) */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-400 border border-white/50 group-hover:scale-125 transition-transform"></div>
          </div>

          {/* Compliant Detailed Card */}
          <div className="relative p-6 rounded-2xl bg-white/[0.04] border border-white/[0.1] shadow-lg group">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 
                          bg-green-500/20 text-green-300 border border-green-500/30">
              Compliant
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">CMS {compliantRule.id} Analysis</h3>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Detailed report on **"{compliantRule.description}"**, confirming full compliance.
            </p>
            {/* Subtle internal gradient/diagram lines */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 opacity-50 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.01] to-white/[0.02] rounded-2xl pointer-events-none"></div>

            {/* Connection point (dot) */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400 border border-white/50 group-hover:scale-125 transition-transform"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionSummary;