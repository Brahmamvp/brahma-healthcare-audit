// src/components/ScoreGauge.jsx

import React from 'react';

const ScoreGauge = ({ score }) => {
    const radius = 50; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference
    const offset = circumference - (score / 100) * circumference; // Calculated dash offset

    let gaugeColor = 'stroke-green-500'; // Default green for High compliance
    if (score < 70) {
        gaugeColor = 'stroke-yellow-500'; // Yellow for Medium compliance
    }
    if (score < 50) {
        gaugeColor = 'stroke-red-500'; // Red for Low compliance
    }

    return (
        <div className="relative w-full h-auto flex items-center justify-center">
            <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 120 120">
                {/* Background Track */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke="#ffffff15" // Subtle white background
                    strokeWidth="15"
                />

                {/* Animated Progress Arc */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke={gaugeColor.replace('stroke-', '#')} // Use the determined color
                    strokeWidth="15"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference} // Start fully hidden
                    style={{
                        strokeDashoffset: offset,
                        transition: 'stroke-dashoffset 1s ease-out, stroke 0.5s',
                        filter: `drop-shadow(0 0 5px ${gaugeColor.replace('stroke-', '')})`,
                    }}
                    strokeLinecap="round"
                />
            </svg>

            {/* Score Display (Center) */}
            <div className="absolute flex flex-col items-center justify-center">
                <p className="text-5xl font-extrabold text-white">{score}<span className="text-xl font-normal opacity-50">%</span></p>
                <p className="text-sm font-light text-white/50 mt-1 uppercase tracking-wider">Compliance</p>
            </div>
        </div>
    );
};

export default ScoreGauge;
