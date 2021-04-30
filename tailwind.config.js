module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        secondary: "#5B21B6"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
