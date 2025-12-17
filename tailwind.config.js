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
        Border: "#EB3636",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite", 
        fadeInUp: "fadeInUp 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
