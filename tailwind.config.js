/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighten2: "#D7B7FE",
          lighten1: "#8E3BCE",
          base: "#781AC1",
          darken1: "#2C0052",
        },
        accent: "#FA707E",
        drawer: "#020050",
      },
    },
  },
  plugins: [],
};
