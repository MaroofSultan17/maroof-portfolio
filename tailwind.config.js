const mix = (name) => `color-mix(in srgb, var(--${name}) calc(<alpha-value> * 100%), transparent)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree Variable", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        bg: mix("bg"),
        surface: mix("surface"),
        line: mix("line"),
        fg: mix("fg"),
        muted: mix("muted"),
        blue: mix("blue"),
        yellow: mix("yellow"),
        red: mix("red"),
        teal: mix("teal"),
      },
    },
  },
  plugins: [],
};
