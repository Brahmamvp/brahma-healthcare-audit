// src/components/TimeSavingsCounter.jsx
import React from "react";

const TimeSavingsCounter = ({ traditionalMinutes, brahmaSeconds }) => {
  const savedMinutes = traditionalMinutes - brahmaSeconds / 60;

  return (
    <div className="mt-4 bg-white border border-gray-200 rounded p-4 shadow-sm">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">
        ⏱️ Time Savings
      </h3>
      <p className="text-sm text-gray-600">
        Traditional documentation time: <strong>{traditionalMinutes} minutes</strong>
      </p>
      <p className="text-sm text-gray-600">
        With Brahma: <strong>{brahmaSeconds} seconds</strong>
      </p>
      <p className="text-sm text-green-600 mt-2 font-medium">
        ✅ You saved approximately {savedMinutes.toFixed(2)} minutes per case.
      </p>
    </div>
  );
};

export default TimeSavingsCounter;