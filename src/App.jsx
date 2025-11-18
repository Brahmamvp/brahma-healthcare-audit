// src/App.jsx

import React, { useState } from 'react';
// --- Background Components --- 
import ParticleBackground from './components/ParticleBackground';
import GradientOrb from './components/GradientOrb';
import AnimatedGradient from './components/AnimatedGradient'; 

// --- Dashboard Components ---
import Sidebar from './components/Sidebar';
import CaseSelector from './components/CaseSelector';
import ComplianceScore from './components/ComplianceScore'; 
import AuditMetadata from './components/AuditMetadata';
import DecisionSummary from './components/DecisionSummary'; 
import AuditTrailViewer from './components/AuditTrailViewer'; 
import ComplianceChecklist from './components/ComplianceChecklist'; 
import AuditPanel from './components/AuditPanel'; 
import RawAuditDebugger from './components/RawAuditDebugger';
import AuditTrailDashboard from './components/AuditTrailDashboard'; // 📊 NEW analytics dashboard

// --- Utility Components ---
import ContextViewer from './components/ContextViewer'; 
// Architecture Overlays
import ExecutionPanel from './components/ExecutionPanel'; // Verifiable Sovereignty / Settings
import ConsentPanel from './components/ConsentPanel'; // MCP Interop / Analytics

// --- Data Import ---
import { allCasesData, initialCaseData } from './data/mockCaseData'; 

// --- View Constants ---
const VIEWS = {
    DASHBOARD: 'Dashboard',
    ANALYTICS: 'Analytics',        // MCP Consent
    HISTORY: 'Audit History',      // Provenance Timeline
    AUDIT_DASHBOARD: 'Audit Dashboard', // System-level MCP/Drift analytics
    SETTINGS: 'Settings',          // Execution Manifest
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentCaseData, setCurrentCaseData] = useState(initialCaseData); 
  const [selectedCase, setSelectedCase] = useState(initialCaseData.caseName); 
  const [activeView, setActiveView] = useState(VIEWS.DASHBOARD); // Sidebar state

  const handleCaseChange = (event) => {
      const newCaseName = event.target.value;
      const newCaseData = allCasesData.find(c => c.caseName === newCaseName);
      if (newCaseData) {
          setSelectedCase(newCaseName);
          setCurrentCaseData(newCaseData); 
      }
  };

  // --- Main View Renderer ---
  const renderMainContent = () => {
    switch (activeView) {
        case VIEWS.ANALYTICS:
            return (
                <div className="w-full max-w-7xl mx-auto py-12">
                    <ConsentPanel patientId={currentCaseData.caseId} />
                </div>
            );
        case VIEWS.HISTORY:
            return (
                <div className="w-full max-w-7xl mx-auto py-12">
                    <AuditTrailViewer caseData={currentCaseData} />
                    <div className="mt-8">
                        <RawAuditDebugger />
                    </div>
                </div>
            );
        case VIEWS.AUDIT_DASHBOARD:
            return (
                <div className="w-full max-w-7xl mx-auto py-12">
                    <AuditTrailDashboard />
                </div>
            );
        case VIEWS.SETTINGS:
            return (
                <div className="w-full max-w-7xl mx-auto py-12">
                    <ExecutionPanel caseId={currentCaseData.caseId} />
                </div>
            );
        case VIEWS.DASHBOARD:
        default:
            return (
                <div className="w-full max-w-7xl mx-auto py-12"> 
                    
                    {/* 0a. Case Selector */}
                    <div className="mb-6">
                        <CaseSelector 
                            currentCaseName={selectedCase} 
                            onCaseChange={handleCaseChange} 
                        />
                    </div>

                    {/* 0b. AUDIT PANEL */}
                    <div className="mb-8">
                        <AuditPanel />
                    </div>

                    {/* 1. TOP SECTION (Score, Metadata, and Decision Summary) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                        <div className="md:col-span-3 flex flex-col space-y-6">
                            <ComplianceScore caseData={currentCaseData} />
                            <AuditMetadata caseData={currentCaseData} />
                        </div>
                        <div className="md:col-span-9">
                            <DecisionSummary caseData={currentCaseData} /> 
                        </div>
                    </div>

                    {/* 2. MIDDLE SECTION (Provenance Timeline) */}
                    <div className="mb-8">
                        <AuditTrailViewer caseData={currentCaseData} />
                    </div>

                    {/* 3. BOTTOM SECTION (Checklist + Debugger) */}
                    <ComplianceChecklist caseData={currentCaseData} />
                    <div className="mt-10">
                        <RawAuditDebugger />
                    </div>
                </div>
            );
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white font-sans">
      
      {/* --- Background Components --- */}
      <AnimatedGradient /> 
      <ParticleBackground />
      <GradientOrb />

      {/* --- Sidebar --- */}
      <Sidebar 
          onOpenContext={() => setIsModalOpen(true)} 
          activeView={activeView}
          setActiveView={setActiveView}
      />

      {/* --- Main Content Area --- */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center p-8 pl-28"> 
        {renderMainContent()} 
      </div>
      
      {/* --- Context Viewer Modal --- */}
      <ContextViewer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Full Case Context & Clinical Data"
      >
        <p>Currently viewing context for: <strong>{selectedCase}</strong></p>
        <p className="mt-4 text-sm text-white/50">
          This panel would typically load large datasets, such as the full patient history, lab results,
          and imaging reports associated with the audit.
        </p>
        <div className="h-64 bg-white/5 mt-6 rounded-lg flex items-center justify-center text-white/30">
            [Placeholder for detailed clinical data tables or embedded charts]
        </div>
      </ContextViewer>
    </div>
  );
};

export default App;