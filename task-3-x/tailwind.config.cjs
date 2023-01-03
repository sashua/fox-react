/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      colors: {
        accent: '#5CB8E4',
        alert: '#FB2576',
        dark: '#181818',
        middle: '#5F6F94',
        light: '#F2F2F2',
      },
    },
  },
  plugins: [],
};
