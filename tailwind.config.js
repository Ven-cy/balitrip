/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
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
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 40px -28px rgba(7, 33, 36, 0.45)',
        lift: '0 28px 60px -30px rgba(7, 33, 36, 0.5)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
