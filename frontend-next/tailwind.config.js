module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
    "./containers/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      purple: "#9770FF",
      lightPurple: "#AC8DFF",
      ultraLightPurple: "#BAB9F1",
      dotPurpleLight: "#E5DEFF",
      blue: "#588CFF",
      yellow: "#FFC66A",
      orange: "#FF633B",
      darkBlue: "#0A0535",
      black: "#000000",
      buttonBorder: "#E4DFFF",
      darkPurple: "#562AF0",
      cardPurple: "#F8F6FF",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    fontSize: {
      bigHeading: [
        "72px",
        {
          lineHeight: "81px",
        },
      ],
      heading: [
        "36px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.035rem",
        },
      ],
      subheading: [
        "16px",
        {
          lineHeight: "22px",
          letterSpacing: "-0.02rem",
        },
      ],
      links: [
        "15px",
        {
          letterSpacing: "-0.01rem",
        },
      ],
      title: ["25px"],
    },
    extend: {
      gap: {
        gridGap: "var(--grid-gutter)",
      },
      padding: {
        gridPadding: "var(--grid-padding)",
      },
      gradientColorStops: (theme) => ({}),
    },
  },
  plugins: [],
};
