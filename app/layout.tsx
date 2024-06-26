import React from "react";
import * as stylex from "@stylexjs/stylex";

import "./globals.css";

import { globalTokens as K } from "./globalTokens.stylex";

export const metadata = {
  title: "Practice-App",
  description: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html {...stylex.props(styles.html, styles.reset)} lang="en">
      <body {...stylex.props(styles.reset, styles.body)}>{children}</body>
    </html>
  );
}

const DARK = "@media (prefers-color-scheme: dark)";
const fgColor = `rgba(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB}, 1)`;

const styles = stylex.create({
  html: {
    colorScheme: "light dark",
  },
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    color: fgColor,
    backgroundImage: {
      default: "linear-gradient(to bottom, rgb(214, 219, 220), white)",
      [DARK]: "linear-gradient(to bottom, rgb(20, 22, 27), black)",
    },
  },
});
