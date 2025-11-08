// src/components/HeaderBar.jsx

import React from "react";

const HeaderBar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">
        🩺 Brahma Healthcare Audit
      </h1>
      <div className="text-sm text-gray-500">
        Fixed Demo Mode · Pneumonia Case
      </div>
    </header>
  );
};

export default HeaderBar;