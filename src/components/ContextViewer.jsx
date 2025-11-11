// src/components/ContextViewer.jsx
import React from 'react';

const ContextViewer = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        // Modal Overlay (Fixed and highly blurred)
        <div className="fixed inset-0 z-[100] flex items-center justify-center 
                        bg-black/50 backdrop-blur-sm transition-opacity duration-300">
            
            {/* Modal Content Panel (Architectural Glass Style) */}
            <div className="relative w-11/12 h-5/6 max-w-5xl p-8 rounded-3xl overflow-hidden 
                            bg-white/[0.05] backdrop-blur-xl border border-white/[0.15] shadow-2xl
                            flex flex-col">
                
                {/* --- Header --- */}
                <header className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
                    <h2 className="text-4xl font-extralight text-white tracking-wide">
                        {title}
                    </h2>
                    
                    {/* Close Button */}
                    <button 
                        onClick={onClose}
                        className="p-2 text-white/70 hover:text-white/90 transition-colors 
                                   rounded-full bg-white/5 hover:bg-white/10"
                        title="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </header>
                
                {/* --- Body Content --- */}
                <div className="flex-grow overflow-y-auto text-white/80 space-y-4">
                    {children}
                </div>
                
                {/* --- Footer Accent --- */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/5 to-transparent"></div>
            </div>
        </div>
    );
};

export default ContextViewer;