// brahma-healthcare-audit/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': '#FF4563', 
        'neon-blue': '#406AFF',
        'aurora-start': '#4A00FF', // Deep Blue/Purple
        'aurora-end': '#FF0055', // Magenta/Pink
      },
      backgroundImage: {
        'radial-gradient-orb': 'radial-gradient(circle at 75% 25%, #FF7B8E, #406AFF, #FFFFFF)',
      },
      // ADD THIS NEW ANIMATION KEYFRAME BLOCK:
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 25s ease-in-out infinite',
      },
      // END NEW ANIMATION BLOCK
    },
  },
};
