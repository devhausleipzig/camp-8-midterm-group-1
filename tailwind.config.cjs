/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#1C1C27",
      white: "#FFFFFF",
      darkLight: "#363740",
      yellow: "#FFB43A",
      red: "#EF4444",
      green: "#22C55E",
      black: "#000000",
      background: "#353333",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      opacity: {
        40: ".4",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
