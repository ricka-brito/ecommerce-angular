/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Overpass Mono"],
    },
    extend: {},
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      "off-white": "#FFF9ED",
      purple: "#A7A6FF",
      salmon: "#FF9F9F",
      green: "#B8FF9F",
      pink: "#FFA6F6",
      yellow: "#FFF59F",
    },
  },
  plugins: [],
};
