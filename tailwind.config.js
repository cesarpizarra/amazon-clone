/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#232f3e",
        darkSecondary: "#131921",
        primary: "#febd69",
        lightWhite: "#E3E6E6",
        colorBlue: "#146eb4",
        footerBg: "#232F3E",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
};
