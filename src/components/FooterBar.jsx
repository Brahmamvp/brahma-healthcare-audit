// src/components/FooterBar.jsx

import React from "react";

const FooterBar = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 shadow-inner px-6 py-3 mt-auto">
      <div className="text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} Brahma Healthcare Audit — All rights reserved.
      </div>
    </footer>
  );
};

export default FooterBar;