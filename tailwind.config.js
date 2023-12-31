/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      "light-green": "#39DB4A",
      "mild-green": "#5FE26C",
      "food-bar": "#C1F1C6",
      "normal-black": "#000",
      "normal-white": "#fff",
    },
  },
  plugins: [require("daisyui")],
};
