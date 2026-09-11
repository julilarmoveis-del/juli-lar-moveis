import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta extraída diretamente da logo da JuliLar Ofertas
        brand: {
          DEFAULT: "#FAAA6E",
          dark: "#B47A4F",
          light: "#FCBD86",
        },
        ink: {
          DEFAULT: "#141F2D",
          dark: "#0C121A",
          light: "#3E4753",
        },
        accent: {
          DEFAULT: "#ECCEB0",
          dark: "#E2C09E",
        },
        sand: {
          DEFAULT: "#F8ECE1",
          dark: "#F2DDC8",
        },
        text: {
          DEFAULT: "#141F2D",
          muted: "#8A7F75",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 4px 24px rgba(43, 33, 24, 0.08)",
        cardHover: "0 8px 32px rgba(43, 33, 24, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
