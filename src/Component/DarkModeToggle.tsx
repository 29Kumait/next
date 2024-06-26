import React from "react";
import * as stylex from "@stylexjs/stylex";

type DarkModeToggleProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  setDarkMode,
}) => {
  return (
    <button
      {...stylex.props(
        darkMode ? darkModeStyles.darkRoot : darkModeStyles.lightRoot,
      )}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "dark" : "light"}
    </button>
  );
};

const darkModeStyles = stylex.create({
  darkRoot: {
    color: "#FFFFFFCF",
    backgroundColor: "#050F1AE8",
  },
  lightRoot: {
    color: "inherit",
    backgroundColor: "inherit",
  },
});

export default DarkModeToggle;
