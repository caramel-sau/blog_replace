module.exports = {
  purge: ["src/components/**/*.jsx", "src/pages/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#b87e78",
        font: "#484848",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
