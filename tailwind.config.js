/** @type {import('tailwindcss').Config} */

/*const {
  themeVariants,
  prefersLight,
  prefersDark,
  prefersHighContrast,
} = require("tailwindcss-theme-variants");*/

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    //backgroundColor: ["light", "dark", "high-contrast"],
  },
  plugins: [],
};

/*
themeVariants({
      baseSelector: "html",
      fallback: true,
      themes: {
        light: {
          selector: "[data-theme=light]",
          mediaQuery: prefersLight,
          semantics: {
            colors: {
              "body-bg": "white",
              "body-text": "gray.800",
              "header-bg": "red.400",
              "footer-bg": "red.400",
            },
          },
        },
        dark: {
          selector: "[data-theme=dark]",
          mediaQuery: prefersDark,
          semantics: {
            colors: {
              "body-bg": "gray.900",
              "body-text": "gray.100",
              "header-bg": "blue.400",
              "footer-bg": "blue.400",
            },
          },
        },
        "high-contrast": {
          selector: "[data-theme=high-contrast]",
          mediaQuery: prefersHighContrast,
          semantics: {
            colors: {
              "body-bg": "black",
              "body-text": "white",
              "header-bg": "green.400",
              "footer-bg": "green.400",
            },
          },
        },
      },
    }),
*/