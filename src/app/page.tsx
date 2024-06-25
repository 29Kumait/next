"use client";
import * as stylex from "@stylexjs/stylex";

import Card from "./Card";
import { globalTokens as K, spacing, text } from "./globalTokens.stylex";

const HOMEPAGE = "http://localhost:3000";

export default function Home() {
  return (
    <main {...stylex.props(pageStyles.main)}>
      <div {...stylex.props(pageStyles.description)}>
        <p {...stylex.props(pageStyles.descP)}>
          <code {...stylex.props(pageStyles.code)}>CODE</code>
        </p>
      </div>
      <div {...stylex.props(pageStyles.hero)}>
        <h1 {...stylex.props(pageStyles.h1)}>
          <span {...stylex.props(pageStyles.emoji)}> 🦔</span>️ &nbsp; ⓣ🅈ⓟⒺ
        </h1>
      </div>

      <div {...stylex.props(pageStyles.grid)}>
        <Card
          href={`${HOMEPAGE}/a/route/`}
          title="Title"
          body="a BODY box, TEXT ...etc."
        />
        <Card
          href={`${HOMEPAGE}/a/route/`}
          title="Title"
          body="a BODY box, TEXT ...etc."
        />
        <Card
          href={`${HOMEPAGE}/a/route/`}
          title="Title"
          body="a BODY box, TEXT ...etc."
        />
        <Card
          href={`${HOMEPAGE}/a/route/`}
          title="Title"
          body="a BODY box, TEXT ...etc."
        />
      </div>
    </main>
  );
}

const MEDIA_MOBILE = "@media (max-width: 700px)";
const MEDIA_TABLET = "@media (min-width: 701px) and (max-width: 1120px)";

const bgImage = `linear-gradient(to bottom, ${K.bgStartRGB}, ${K.calloutRGB50})`;
const xBorderColor = `rgba(${K.calloutBorderR}, ${K.calloutBorderG}, ${K.calloutBorderB}, 0.3)`;
const xBorderBottomColor = `rgba(${K.calloutBorderR}, ${K.calloutBorderG}, ${K.calloutBorderB}, 0.25)`;

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
  description: {
    display: "inherit",
    justifyContent: "inherit",
    alignItems: "inherit",
    fontSize: text.sm,
    maxWidth: K.maxWidth,
    width: "100%",
    zIndex: 2,
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
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(4, minmax(25%, auto))",
      [MEDIA_MOBILE]: "1fr",
      [MEDIA_TABLET]: "repeat(2, 50%)",
    },
    width: K.maxWidth,
    maxWidth: {
      default: "100%",
      [MEDIA_MOBILE]: 320,
    },
    textAlign: { [MEDIA_MOBILE]: "center" },
  },
  toggleButton: {
    backgroundColor: "transparent",
    borderStyle: "none",
    cursor: "pointer",
    fontSize: text.sm,
    marginRight: spacing.sm,
  },
});
