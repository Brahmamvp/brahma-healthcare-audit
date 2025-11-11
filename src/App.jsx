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

// --- Utility Components ---
import ContextViewer from './components/ContextViewer'; 

// --- Data Import ---
import { allCasesData, initialCaseData } from './data/mockCaseData'; 

// Define the different possible views/pages
const VIEWS = {
    DASHBOARD: 'Dashboard',
    ANALYTICS: 'Analytics',
    HISTORY: 'Audit History',
    SETTINGS: 'Settings',
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentCaseData, setCurrentCaseData] = useState(initialCaseData); 
  const [selectedCase, setSelectedCase] = useState(initialCaseData.caseName); 
  
  // NEW: State to track the active view/page (connected to Sidebar)
  const [activeView, setActiveView] = useState(VIEWS.DASHBOARD); 
  

  const handleCaseChange = (event) => {
      const newCaseName = event.target.value;
      const newCaseData = allCasesData.find(c => c.caseName === newCaseName);

      if (newCaseData) {
          setSelectedCase(newCaseName);
          setCurrentCaseData(newCaseData); 
      }
  };

  // Helper function to render content based on the active view
  const renderMainContent = () => {
    switch (activeView) {
        case VIEWS.ANALYTICS:
            return <div className="text-3xl p-10 text-white/50">Analytics View is Under Construction...</div>;
        case VIEWS.HISTORY:
            return <div className="text-3xl p-10 text-white/50">Audit History View is Under Construction...</div>;
        case VIEWS.SETTINGS:
            return <div className="text-3xl p-10 text-white/50">Settings View is Under Construction...</div>;
        case VIEWS.DASHBOARD:
        default:
            // This is your main, complex dashboard view
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

                    {/* 2. MIDDLE SECTION (Audit Trail Viewer) */}
                    <div className="mb-8">
                        <AuditTrailViewer caseData={currentCaseData} />
                    </div>

                    {/* 3. BOTTOM SECTION (Compliance Checklist) */}
                    <ComplianceChecklist caseData={currentCaseData} />
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

      {/* --- Sidebar (Passes state and setter) --- */}
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
        <p>Currently viewing context for: **{selectedCase}**</p>
        <p className="mt-4 text-sm text-white/50">This panel would typically load large datasets, such as the full patient history, lab results, and imaging reports associated with the audit.</p>
        <div className="h-64 bg-white/5 mt-6 rounded-lg flex items-center justify-center text-white/30">
            [Placeholder for detailed clinical data tables or embedded charts]
        </div>
      </ContextViewer>
    </div>
  );
};

export default App;
