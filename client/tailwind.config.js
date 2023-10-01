/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffae42",

          secondary: "#5f4019",

          accent: "#005248",

          neutral: "#44403c",

          "base-100": "#fff8f2",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
        fontFamily: {
          display:['Montserrat', "sans-serif"],},
      },
    ],
  }
}

