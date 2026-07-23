/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060A14',
          900: '#0B1120',
          800: '#111A2E',
          700: '#1A2540',
          600: '#25325A',
        },
        ink: {
          400: '#94A3B8',
          300: '#B4C0D3',
        },
        accent: {
          indigo: '#7C3AED',
          cyan: '#2563EB',
          violet: '#A855F7',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'aurora-gradient': 'radial-gradient(circle at 20% 20%, rgba(147,51,234,0.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(37,99,235,0.28), transparent 45%), radial-gradient(circle at 50% 80%, rgba(168,85,247,0.25), transparent 45%)',
        'grid-pattern': 'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'accent-gradient': 'linear-gradient(135deg, #9333EA 0%, #2563EB 100%)',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(147,51,234,0.5)',
        card: '0 20px 60px -20px rgba(0,0,0,0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
