// src/components/AnimatedGradient.jsx

import React from 'react';

const AnimatedGradient = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large, slow-moving blurred background element */}
      <div className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] 
                      -translate-x-1/2 -translate-y-1/2 
                      bg-gradient-to-br from-aurora-start via-black to-aurora-end 
                      opacity-30 blur-3xl 
                      animate-gradient-shift bg-[400%_400%]" 
      />
      {/* Secondary softer element to introduce more blue/teal depth */}
       <div className="absolute bottom-0 right-0 w-[80vw] h-[80vh] 
                      bg-gradient-to-tl from-transparent via-cyan-500/10 to-transparent
                      blur-3xl opacity-20"
      />
    </div>
  );
};

export default AnimatedGradient;
