/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      clipPath: {
        blob: 'polygon(50% 0%, 100% 25%, 75% 100%, 0% 75%)',
      },
    },
  },
  plugins: [],
};
