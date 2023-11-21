/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Roboto Slab']
      },
      colors:{
        'primary': '#23263A',
        'primary-dark': '#212336',
        'secondary': '#FFFFFF',
        'tertiary': '#FF4A57'
      }
    },
  },
  plugins: [],
}