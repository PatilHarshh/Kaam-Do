/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        bounce1: "bounce 0.6s infinite",
        bounce2: "bounce 0.6s infinite 0.2s",
        bounce3: "bounce 0.6s infinite 0.4s",
      },
    },
  },
  plugins: [],
};
