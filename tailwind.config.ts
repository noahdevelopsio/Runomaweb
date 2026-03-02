import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:    "#0F1923",
        slate:  "#1C2B3A",
        dusk:   "#2A3F52",
        sage:   "#7CB49A",
        "sage-dark": "#4A9070",
        mist:   "#A8C5DA",
        glow:   "#C8E6C0",
        surface: {
          0: "#0F1923",
          1: "#141F2B",
          2: "#1C2B3A",
          3: "#243344",
        },
        text: {
          primary:   "#F0F4F8",
          secondary: "#8DA4B8",
          muted:     "#4F6478",
          accent:    "#7CB49A",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
      fontSize: {
        "display-sm":  ["3rem",   { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md":  ["4rem",   { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg":  ["5.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl":  ["7rem",   { lineHeight: "1.0",  letterSpacing: "-0.03em" }],
      },
      backgroundImage: {
        "gradient-sage":  "linear-gradient(135deg, #7CB49A 0%, #4A9070 100%)",
        "gradient-card":  "linear-gradient(145deg, #1C2B3A 0%, #141F2B 100%)",
        "gradient-hero":  "linear-gradient(135deg, #0F1923 0%, #1C2B3A 50%, #0F2318 100%)",
      },
      boxShadow: {
        glow:  "0 0 40px rgba(124,180,154,0.15), 0 0 80px rgba(124,180,154,0.08)",
        card:  "0 0 0 1px rgba(124,180,154,0.08), 0 8px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 0 0 1px rgba(124,180,154,0.25), 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,180,154,0.08)",
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "mesh-1": "mesh1 12s ease-in-out infinite",
        "mesh-2": "mesh2 16s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        mesh1: {
          "0%, 100%": { transform: "translate(0%, 0%)" },
          "33%":      { transform: "translate(10%, -10%)" },
          "66%":      { transform: "translate(-8%, 8%)" },
        },
        mesh2: {
          "0%, 100%": { transform: "translate(0%, 0%)" },
          "33%":      { transform: "translate(-12%, 8%)" },
          "66%":      { transform: "translate(10%, -6%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
