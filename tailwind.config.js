module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false,
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
