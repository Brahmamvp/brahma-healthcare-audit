// components/HeaderBar.jsx
import React from 'react';

const HeaderBar = () => {
  return (
    <div className="w-full px-10 py-6 flex flex-col gap-1 backdrop-blur-md bg-white/5 border-b border-white/10 rounded-b-xl shadow-sm">
      <h1 className="text-2xl md:text-3xl font-serif text-white tracking-wide">
        Healthcare Audit
      </h1>
      <p className="text-white/70 text-sm md:text-base font-light">Pneumonia Case 1</p>
    </div>
  );
};

export default HeaderBar;