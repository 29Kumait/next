import React from "react";
import * as stylex from "@stylexjs/stylex";
import Card from "./Card";
import { globalTokens as K } from "../globalTokens.stylex";

const MEDIA_MOBILE = "@media (max-width: 700px)";

const gridStyles = stylex.create({
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(4, minmax(25%, auto))",
      [MEDIA_MOBILE]: "1fr",
    },
    width: K.maxWidth,
    maxWidth: {
      default: "100%",
      [MEDIA_MOBILE]: 320,
    },
    textAlign: { [MEDIA_MOBILE]: "center" },
  },
});

const Grid: React.FC = () => {
  const HOMEPAGE = "http://localhost:3000";
  return (
    <div {...stylex.props(gridStyles.grid)}>
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
  );
};

export default Grid;
