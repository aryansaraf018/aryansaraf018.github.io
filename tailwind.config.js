/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          0: "#0b0b0d",
          1: "#111114",
          2: "#17171c",
          3: "#1e1e25",
          card: "#14141a",
        },
        fg: {
          0: "#f4f3ee",
          1: "#d4d2c8",
          2: "#8c8a82",
          3: "#5a5853",
        },
        amber: {
          DEFAULT: "#f59e0b",
          bright: "#fbbf24",
          dim: "rgba(245, 158, 11, 0.12)",
          line: "rgba(245, 158, 11, 0.3)",
        },
        border: {
          DEFAULT: "#26262e",
          bright: "#363640",
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        pulse: "softpulse 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        marquee: "marquee 45s linear infinite",
      },
      keyframes: {
        softpulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
        blink: {
          "50%": { opacity: 0 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
