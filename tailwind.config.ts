import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        header: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      colors: {
        dark: "#020617",
        section: "#050b21",
        card: "#0b111d",
        primary: "#3F8BF9",
        secondary: "#7469F8",
        accent: "#AB57F3",
        pop: "#E057D8",
        text: "#cbd5e1",
        muted: "#94a3b8",
        brand: {
          dark: "#020617",
          section: "#050b21",
          card: "#0b111d",
          primary: "#3F8BF9",
          secondary: "#7469F8",
          accent: "#AB57F3",
          highlight: "#E057D8",
          text: "#cbd5e1",
          muted: "#94a3b8",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to right, #3F8BF9, #7469F8, #AB57F3)",
        "gradient-hero-secondary": "linear-gradient(to right, #7469F8, #AB57F3, #E057D8)",
        "gradient-brand": "linear-gradient(to right, #3F8BF9, #AB57F3)",
        "gradient-header-cta": "linear-gradient(45deg, #06b6d4, #8b5cf6)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 5s ease-in-out infinite 1s",
        "float-fast": "float-fast 7s ease-in-out infinite 2s",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
