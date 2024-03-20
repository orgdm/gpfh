import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'sans': ['var(--font-open-sans)', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['var(--font-poppins)', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "overlay": "linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 100%"
      },
      height: {
        'head': '43px',
      },
      screens: {
        '2xs': '360px',
        'xs': '420px',
        'xxl': '1400px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      boxShadow: {
        'head': '0 1px 7px rgba(41,37,36,0.85)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
