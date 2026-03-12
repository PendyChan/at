/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#073290',
          'blue-light': '#1a4db3',
          'blue-pale': '#e8eef8',
          'blue-dark': '#051f5c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

