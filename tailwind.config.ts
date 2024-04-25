import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "base": {
          "white": "#FCFCFD",
          "black": "#000000",
        },
        "gray": {
          "50": "#F9FAFB",
          "100": "#F2F4F7",
          "200": "#EAECF0",
          "300": "#D0D5DD",
          "400": "#98A2B3",
          "500": "#667085",
          "600": "#475467",
          "700": "#344054",
          "800": "#1D2939",
          "900": "#101828",
        },
        "brand": {
          "50": "#FDE5E9",
          "100": "#FBCCD4",
          "200": "#F799A9",
          "300": "#F3667E",
          "400": "#EF3353",
          "500": "#EB0028",
          "600": "#BC0020",
          "700": "#8D0018",
          "800": "#5E0010",
          "900": "#2F0008"
        },
        "error": {
          "50": "#FEF3F2",
          "100": "#FEE4E2",
          "200": "#FECDCA",
          "300": "#FDA29B",
          "400": "#F97066",
          "500": "#F04438",
          "600": "#D92D20",
          "700": "#B42318",
          "800": "#912018",
          "900": "#7A271A"
        },
        "warning": {
          "50": "#FFFAEB",
          "100": "#FEF0C7",
          "200": "#FEDF89",
          "300": "#FEC84B",
          "400": "#FDB022",
          "500": "#F79009",
          "600": "#DC6803",
          "700": "#B54708",
          "800": "#93370D",
          "900": "#7A2E0E",
        },
        "success": {
          "50": "#ECFDF3",
          "100": "#D1FADF",
          "200": "#A6F4C5",
          "300": "#6CE9A6",
          "400": "#32D583",
          "500": "#12B76A",
          "600": "#039855",
          "700": "#027A48",
          "800": "#05603A",
          "900": "#054F31"
        },
        "shadow": {
          "title": "rgba(235, 0, 40, 0.25)",
        }
      },
      fontWeight: {
        "regular": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700"
      },
      fontSize: {
        "headline-1": "40px",
        "headline-2": "32px",
        "headline-3": "28px",
        "headline-4": "24px",
        "headline-5": "20px",
        "body": "17px",
        "caption": "13px",
        "caption-2": "11px"
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        "plus-jakarta-sans": ['var(--font-jakarta-sans)'],
        "montserrat": ['var(--font-montserrat)'],
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
