import React from "react";

export const themes = {
  light: {
    title_text: "#028299",
    main_text: "black",
    background_color: "#ffff",
    subtitle_text: "#1B03A3",
  },
  dark: {
    title_text: "#028299",
    main_text: "#ffff",
    background_color: "#242526",
    subtitle_text: "#eeeeee",
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
