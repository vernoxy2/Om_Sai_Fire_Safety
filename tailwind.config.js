/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        alumni: ["'Alumni Sans'", "sans-serif"], 
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#F38624",  
          start: "#CD512B",
          end: "#F38624",
        },
        secondary: "#F38624",
        accent: "#10B981",
      },
    },
  },
  plugins: [],
};
