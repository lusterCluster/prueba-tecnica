/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'primary': "#274472",
      'background': '#C3E0E5',
      'onSurface' : '#5885AF',
      'secondaryOnSurface': '#41729F',
      'onError': '#722727',
      'disabled': '#6C6E71',
      'white': '#fff'
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "Roboto", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
