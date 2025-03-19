/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6511',
        'primary-hover': '#E55A0F',
        secondary: '#2563EB',
        'secondary-hover': '#1D4ED8',
        'gray-bg': '#D9D9D9',
        'bg-hero': '#F5F0EF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
        'clash': ['Syne', 'sans-serif'],
        'syne': ['Syne', 'sans-serif'],
      },
      width: {
        'hero': '1440px',
      },
      height: {
        'hero': '634px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-down': 'fadeDown 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} 