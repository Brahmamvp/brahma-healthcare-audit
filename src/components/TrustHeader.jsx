// src/components/TrustHeader.jsx
import React from 'react';

const TrustHeader = () => {
  return (
    <header className="border-b pb-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight">🩺 Brahma Healthcare Audit</h1>
      <p className="text-sm text-gray-600 mt-1">
        🔒 HIPAA Compliant &nbsp;|&nbsp; ✅ FDA 21 CFR Part 820 &nbsp;|&nbsp; 📋 State Audit Ready
      </p>
    </header>
  );
};

export default TrustHeader;