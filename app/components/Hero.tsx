import React from "react";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as K, spacing, text } from "../globalTokens.stylex";

const MEDIA_MOBILE = "@media (max-width: 700px)";

const heroStyles = stylex.create({
  hero: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: spacing.xl,
  },
  h1: {
    fontSize: text.h1,
    lineHeight: 1,
    fontFamily: K.fontSans,
    fontWeight: 400,
    textAlign: "center",
    display: "flex",
    gap: spacing.md,
    whiteSpace: "nowrap",
    flexDirection: {
      default: "row",
      [MEDIA_MOBILE]: "column",
    },
  },
  emoji: {
    position: "relative",
    fontFamily: "sans-serif",
    top: {
      default: 0,
      [MEDIA_MOBILE]: spacing.xxxs,
    },
  },
});

const Hero: React.FC = () => {
  return (
    <div {...stylex.props(heroStyles.hero)}>
      <h1 {...stylex.props(heroStyles.h1)}>
        <span {...stylex.props(heroStyles.emoji)}> ️</span>️🌰 &nbsp; ⓣ🅈ⓟⒺ
      </h1>
    </div>
  );
};

export default Hero;
