/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorgray: "#f4f4f5",
        colorblue: "#1e2832",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        Roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
};
