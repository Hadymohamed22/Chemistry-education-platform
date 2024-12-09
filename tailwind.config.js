/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    dropShadow: {
      "orange": '0 4px 6px rgba(255, 165, 0, 0.5)',
      "black": '1px 1px 6px rgba(0, 0, 0, 0.5)',
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};
