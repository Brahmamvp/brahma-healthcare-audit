// components/AuditNode.jsx
import React from 'react';
import clsx from 'clsx';

const AuditNode = ({ title, code, description, status }) => {
  return (
    <div
      className={clsx(
        'rounded-xl p-4 border text-white/90 w-full max-w-md shadow-lg',
        'backdrop-blur-sm bg-white/5 border-white/10',
        status === 'compliant' ? 'ring-1 ring-green-400/30' : 'ring-1 ring-red-400/30'
      )}
    >
      <p className="text-sm opacity-60 mb-1">{status === 'compliant' ? 'Compliant' : 'Non-Compliant'}</p>
      <h3 className="text-md font-semibold tracking-wide">{code}</h3>
      <p className="text-sm opacity-80 mt-1">{description}</p>
    </div>
  );
};

export default AuditNode;