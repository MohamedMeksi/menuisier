/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f0',
          100: '#f0e9df',
          200: '#e1d0bf',
          300: '#d2b69e',
          400: '#c39c7d',
          500: '#b4825c', // primary wood tone
          600: '#8B4513', // darker wood
          700: '#6f3e1f',
          800: '#5e321a',
          900: '#422212',
        },
        accent: {
          50: '#f5f7f7',
          100: '#e0e7e7',
          200: '#c1cece',
          300: '#9aadad',
          400: '#758c8c',
          500: '#5f7272',
          600: '#4a5a5a',
          700: '#2F4F4F', // dark slate green
          800: '#253c3c',
          900: '#1b2c2c',
        },
        tan: {
          50: '#fcfbf8',
          100: '#f8f5ed',
          200: '#f1e9d8',
          300: '#e9ddc3',
          400: '#e2d1ae',
          500: '#D2B48C', // tan
          600: '#bd9f6c',
          700: '#a78b58',
          800: '#8c7347',
          900: '#6e5a37',
        },
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};