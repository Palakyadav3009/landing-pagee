/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#2b2b2b",
          "200": "#262626",
          "300": "#191818",
          "400": "#0f0f0f",
          "500": "#0c0c0c",
          "600": "rgba(0, 0, 0, 0.5)",
        },
        "purple-50": "#f4f3ff",
        "purple-25": "#fafaff",
        white: "#fff",
        "w-25": "#fffcf5",
        "g-50": "#f9fafb",
        dimgray: {
          "100": "#565353",
          "200": "#4d4a4a",
          "300": "#524242",
        },
        "g-25": "#fcfcfd",
        "w-300": "#fec84b",
        saddlebrown: "#533c06",
        "g-100": "#f2f4f7",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "text-sm-regular": "Inter",
      },
      borderRadius: {
        "13xl": "32px",
        "7xs-6": "5.6px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      sm: "14px",
      "41xl": "60px",
      "17xl": "36px",
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      "5xl": "24px",
      "3xs": "10px",
      xs: "12px",
      lgi: "19px",
      "lg-4": "18.4px",
      "45xl": "64px",
      "32xl": "51px",
      "77xl": "96px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
