// src/components/GradientOrb.jsx
import React from 'react';

const GradientOrb = () => {
    return (
        // Changed position to top-10 right-10 and size to w-32 h-32
        <div className="absolute top-10 right-10 z-0 opacity-50 
                        transition-all duration-1000 ease-in-out hover:opacity-100"> 
            
            {/* Drastically reduced size: from w-96 h-96 to w-32 h-32 */}
            <div className="w-32 h-32 rounded-full filter blur-xl 
                            bg-gradient-to-br from-neon-blue to-neon-red 
                            animate-slow-pulse" 
            />

            {/* If you want to remove the pulsing movement (animate-slow-pulse),
               replace the class name above with: "w-32 h-32 rounded-full filter blur-xl bg-gradient-to-br from-neon-blue to-neon-red"
            */}
        </div>
    );
};

export default GradientOrb;

// NOTE: You would need to ensure 'animate-slow-pulse' is defined in your Tailwind config.
// If you don't have that custom animation, remove the class `animate-slow-pulse` to stop movement.
