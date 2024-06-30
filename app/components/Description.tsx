import React from "react";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as K, spacing, text } from "../globalTokens.stylex";
import DarkModeToggle from "./DarkModeToggle";

const MEDIA_MOBILE = "@media (max-width: 700px)";

const bgImage = `linear-gradient(to bottom, ${K.bgStartRGB}, ${K.calloutRGB50})`;
const xBorderColor = `rgba(${K.calloutBorderR}, ${K.calloutBorderG}, ${K.calloutBorderB}, 0.3)`;
const xBorderBottomColor = `rgba(${K.calloutBorderR}, ${K.calloutBorderG}, ${K.calloutBorderB}, 0.25)`;

export const descriptionStyles = stylex.create({
  description: {
    display: "inherit",
    justifyContent: "inherit",
    alignItems: "inherit",
    fontSize: text.sm,
    maxWidth: K.maxWidth,
    width: "100%",
    zIndex: 3,
    fontFamily: K.fontMono,
  },
  descLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xxs,
    padding: { [MEDIA_MOBILE]: spacing.sm },
  },
  descP: {
    display: { [MEDIA_MOBILE]: "flex" },
    position: {
      default: "relative",
      [MEDIA_MOBILE]: "fixed",
    },
    justifyContent: { [MEDIA_MOBILE]: "center" },
    alignItems: { [MEDIA_MOBILE]: "center" },
    width: { [MEDIA_MOBILE]: "100%" },
    margin: 0,
    paddingInline: spacing.sm,
    paddingTop: {
      default: spacing.sm,
      [MEDIA_MOBILE]: spacing.lg,
    },
    paddingBottom: {
      default: spacing.sm,
      [MEDIA_MOBILE]: spacing.md,
    },
    backgroundColor: K.calloutRGB50,
    backgroundImage: {
      default: null,
      [MEDIA_MOBILE]: bgImage,
    },
    borderWidth: {
      default: "1px",
      [MEDIA_MOBILE]: "0",
    },
    borderStyle: "solid",
    borderColor: xBorderColor,
    borderBottomColor: {
      default: null,
      [MEDIA_MOBILE]: xBorderBottomColor,
    },
    borderRadius: {
      default: spacing.xs,
      [MEDIA_MOBILE]: 0,
    },
    inset: { [MEDIA_MOBILE]: "0 0 auto" },
  },
  code: {
    fontWeight: 700,
    fontFamily: K.fontMono,
  },
});

const Description: React.FC<{
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}> = ({ darkMode, setDarkMode }) => {
  return (
    <div {...stylex.props(descriptionStyles.description)}>
      <p {...stylex.props(descriptionStyles.descP)}>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <code {...stylex.props(descriptionStyles.code)}>CODE</code>
      </p>
    </div>
  );
};

export default Description;
