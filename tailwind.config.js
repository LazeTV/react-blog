/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a', // Dark gray
          light: '#2d2d2d',
        },
        accent: {
          gold: '#D4AF37',
          blue: '#0066CC',
        },
        'primary-light': '#f5f5f5',
        'accent-blue': '#3b82f6',
        'accent-gold': '#eab308',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1a1a1a',
            a: {
              color: '#0066CC',
              '&:hover': {
                color: '#D4AF37',
              },
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'terminal-pulse': 'terminalPulse 1.5s ease-in-out infinite',
        'terminal-glow': 'terminalGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        terminalPulse: {
          '0%, 100%': { 
            opacity: '0.7',
            textShadow: '0 0 5px rgba(59, 130, 246, 0.5)'
          },
          '50%': { 
            opacity: '1',
            textShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
          },
        },
        terminalGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)'
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)'
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'text-white',
    'dark:text-white',
    'text-primary',
    'dark:text-primary',
    'bg-accent-blue',
    'dark:bg-accent-gold',
    'border-accent-blue',
    'dark:border-accent-gold',
    'hover:border-accent-blue',
    'dark:hover:border-accent-gold',
  ]
} 