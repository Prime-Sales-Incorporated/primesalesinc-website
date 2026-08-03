/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1173d4",
        "background-light": "#f6f7f8",
        "background-dark": "#0A0C0A",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        sufrimeda: ["Sufrimeda", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        splashPulse: {
          "0%, 100%": {
            transform: "scale(1)",
            filter: "drop-shadow(0 0 0px rgba(117,192,67,0))",
          },
          "50%": {
            transform: "scale(1.06)",
            filter: "drop-shadow(0 0 14px rgba(117,192,67,0.45))",
          },
        },
        splashBar: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(60%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
        fadeIn: "fadeIn .5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "splash-pulse": "splashPulse 1.8s ease-in-out infinite",
        "splash-bar": "splashBar 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
