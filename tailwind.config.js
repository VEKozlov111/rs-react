/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        color1: "#026670",
        color2: "#9FEDD7",
        color3: "#FEF9C7",
        color4: "#FCE181",
        color5: "#EDEAE5",
        color6: "#00000050",
        bgModal: "rgba(20, 19, 19, 0.8);",
      },
    },
  },
  plugins: [],
};
