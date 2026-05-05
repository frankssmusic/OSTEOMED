/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#1A6B5A',
        'green-dark': '#134d40',
        'green-light': '#228974',
        'green-pale': '#e8f5f2',
        'green-mid': '#c5e8e1',
        'gray-700': '#1e3530',
        'gray-500': '#4a6660',
        'gray-300': '#8fa89f',
        'gray-100': '#e2eae8',
        emergency: '#c0392b',
        gold: '#c9943a',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}