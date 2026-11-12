/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FCF8F1',
          100: '#F7F0E4',
          200: '#EFE3D1',
          300: '#E1CFB3',
          400: '#CDB48E',
          500: '#B99A6E',
          600: '#9F7E55',
          700: '#816443',
          800: '#5F4932',
          900: '#3F3022',
        },
        ocean: {
          50: '#EBF6F4',
          100: '#D0EBE7',
          200: '#A5D7D2',
          300: '#72BCB7',
          400: '#469C99',
          500: '#2A7F7D',
          600: '#1E6666',
          700: '#195253',
          800: '#143F41',
          900: '#0E3032',
          950: '#072124',
        },
        coral: {
          50: '#FDF1ED',
          100: '#FADFD6',
          200: '#F4BFAE',
          300: '#EC9C84',
          400: '#E47C60',
          500: '#D8624A',
          600: '#BC4B37',
          700: '#97392B',
          800: '#722C22',
          900: '#4E201A',
        },
        gold: {
          100: '#F6E9CB',
          200: '#EDD6A4',
          300: '#E1BD75',
          400: '#D3A44F',
          500: '#B98A38',
        },
      },
      fontFamily: {
        display: [
          '"Noto Serif Gujarati"',
          'Fraunces',
          'Georgia',
          'serif',
        ],
        sans: [
          '"Mukta Vaani"',
          'Manrope',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 18px 45px -25px rgba(7, 33, 36, 0.35)',
        lift: '0 30px 60px -25px rgba(7, 33, 36, 0.45)',
        glow: '0 0 0 1px rgba(252, 248, 241, 0.12), 0 25px 60px -20px rgba(7, 33, 36, 0.65)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.35s ease-out both',
        'modal-in': 'modalIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-pan': 'slowPan 24s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalIn: {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slowPan: {
          '0%': { transform: 'scale(1.05) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.14) translate3d(-1.5%, -1%, 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
