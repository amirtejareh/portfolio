import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

type ColorObject = {
  [key: string]: string;
};

export const tailwindColors: ColorObject = {
  white: "rgba(255, 255, 255, 1) ",
  black: "rgba(17, 17, 17, 1) ",
  gray: "rgba(224, 224, 224, 1)",
  background: "rgba(242, 242, 242, 1)",
  primary: "rgba(239, 142, 53, 1)",
  hover: "rgba(151, 97, 27, 1)",
  "secondary-1": "rgba(243, 183, 0, 1)",
  "secondary-2": "rgba(72, 50, 14, 1) ",
  "gray-100": "rgba(248, 250, 251, 1)",
  "gray-150": "rgba(226, 230, 233, 1)",
  "gray-200": "rgba(190, 198, 204, 1)",
  "gray-300": "rgba(149, 158, 166, 1)",
  "gray-400": "rgba(108, 118, 128, 1)",
  "gray-500": "rgba(75, 82, 89, 1)",
  "gray-600": "rgba(43, 47, 51, 1)",
};

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      lg: "1440px",
      md: "1280px",
      sm: "744px",
      xs: "360px",
    },
    extend: {
      boxShadow: {
        custom: "0 4px 10px 0 rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
      },
      colors: tailwindColors,
      spacing: {
        "2": "2px",
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "40": "40px",
        "44": "44px",
        "48": "48px",
        "56": "56px",
        "64": "64px",
        "72": "72px",
        "80": "80px",
        "96": "96px",
        "128": "128px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: any) {
      addUtilities({
        ".scrollbar-none": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "scrollbar-width": 0,
        },
      });
    }),
  ],
};
export default config;
