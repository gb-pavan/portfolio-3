// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI"', 'sans-serif'],
      },
       borderRadius: {
        'custom-btn': '10px 10px 10px 10px', // top-left, top-right, bottom-right, bottom-left
      },
      backgroundImage: {
        'download-gradient': 'linear-gradient(to right, #DF580C, #FD993D)',
        'contact-gradient': 'linear-gradient(to right, #434343, #000000)',
      },
      clipPath: {
        blob: 'polygon(50% 0%, 100% 25%, 75% 100%, 0% 75%)',
      },
    },
  },
  plugins: [],
};

