/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <-- important for next-themes
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
