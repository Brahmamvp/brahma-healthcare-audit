// src/components/Sidebar.jsx

import React from 'react';

// Sidebar Menu Data (updated with "Audit Dashboard")
const menuItems = [
    { name: 'Dashboard', icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: 'Analytics', icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" },
    { name: 'Audit History', icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: 'Audit Dashboard', icon: "M4 6h16M4 10h16M4 14h16M4 18h16" }, // 📊 bars
    { name: 'Settings', icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.298.07 2.572-1.065z" },
];

const Sidebar = ({ onOpenContext, activeView, setActiveView }) => {
    const handleNavigation = (item) => {
        setActiveView(item);
        console.log(`Navigating to: ${item}`);
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-20 p-4 z-50 
                        bg-gray-900/80 backdrop-blur-sm 
                        flex flex-col items-center justify-between border-r border-white/10">

            {/* Logo/Title Placeholder */}
            <div className="text-xl font-bold text-neon-blue mt-2">AI</div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 flex-grow justify-center">
                {menuItems.map((item) => (
                    <button 
                        key={item.name} 
                        onClick={() => handleNavigation(item.name)}
                        className={`p-3 rounded-xl transition-all duration-200 
                                    ${activeView === item.name
                                        ? 'bg-neon-blue text-white shadow-md shadow-neon-blue/50' 
                                        : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
                        title={item.name}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                    </button>
                ))}
            </nav>

            {/* Context Viewer Button */}
            <div className="mb-4">
                <button
                    onClick={onOpenContext}
                    title="View Full Context"
                    className="p-3 rounded-xl bg-white/10 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-200"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6M19 21v-7a4 4 0 00-4-4H9a4 4 0 00-4 4v7M4 17h16a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;