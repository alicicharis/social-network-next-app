import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ff8f00",
        lightPrimaryColor: "#ffd399",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
