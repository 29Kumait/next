"use client";
import React, { useState } from "react";

import * as stylex from "@stylexjs/stylex";

import { spacing } from "./globalTokens.stylex";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Description from "./components/Description";

const darkModeStyles = stylex.create({
  darkRoot: {
    color: "#FFFFFFCF",
    backgroundColor: "#050F1AE8",
  },
  lightRoot: {},
});

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const currentRootStyle = darkMode
    ? darkModeStyles.darkRoot
    : darkModeStyles.lightRoot;
  return (
    <main {...stylex.props(pageStyles.main, currentRootStyle)}>
      <Description darkMode={darkMode} setDarkMode={setDarkMode} /> <Hero />
      <Grid />
    </main>
  );
};

const MEDIA_MOBILE = "@media (max-width: 700px)";

const pageStyles = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    paddingTop: spacing.xxl,
    paddingBottom: {
      default: spacing.xxl,
      [MEDIA_MOBILE]: spacing.md,
    },
  },
});

export default Home;
