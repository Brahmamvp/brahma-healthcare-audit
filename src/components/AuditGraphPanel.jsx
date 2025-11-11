import React from 'react';

const AuditGraphPanel = () => {
  return (
    <div className="grid grid-cols-2 gap-12">
      {/* Left Column */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Non-Compliant</h2>
          <p className="text-white font-bold mt-2">CMS SEP-1.a</p>
          <p className="text-white/70">Initiation of broad-spectrum antibiotics</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Compliant</h2>
          <p className="text-white font-bold mt-2">CMS SEP-1.f</p>
          <p className="text-white/70">Repeat lactic acid measurement</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-3 h-3 bg-orange-500 rounded-full mt-1.5" />
          <div>
            <p className="font-bold text-white">CMS SEP-1.a</p>
            <p className="text-white/70">Initiation of broad-spectrum antibiotics</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-3 h-3 bg-white rounded-full mt-1.5" />
          <div>
            <p className="font-bold text-white">Compliant</p>
            <p className="text-white/70">Repeat lactic acid measurement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditGraphPanel;