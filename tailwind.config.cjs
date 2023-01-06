/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
        dark:'#1C1C27',
        white:'#FFFFFF',
        whiteDimmed:'#FFFFFF66',
        darkLight:'#363740',
        yellow:'#FFB43A',
        red:'#EF4444',
        green:'#22C55E',
        black:'#000000',

    },
    extend: {
      fontFamily:{
        Inter:['Inter', "sans-serif"],
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
