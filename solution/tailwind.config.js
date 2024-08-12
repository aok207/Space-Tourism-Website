/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0B0D17",
        lightblue: "#D0D6F9",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        "barlow-regular": ["Barlow", "sans-serif"],
        "barlow-condensed": ['"Barlow Condensed"', "sans-serif"],
      },
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
