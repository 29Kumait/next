import { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";

const stylesStickyContent = stylex.create({
  stickyContent: {
    // display: "none",
    height: "20rem",
    width: "27rem",
    borderRadius: "8px",
    position: "sticky",
    top: "31%",
    transform: "translateY(-31%)",
    overflow: "hidden",
    background: "rgba(251, 251, 253, 0.91)",
    display: {
      _: "none",
      "@media (min-width: 768px)": "block",
    },
  },
});

const StickyContent = forwardRef(({ children, gradientStyle }, ref) => {
  return (
    <div
      ref={ref}
      {...stylex.props(stylesStickyContent.stickyContent, gradientStyle)}
    >
      {children}
    </div>
  );
});
StickyContent.displayName = "StickyContent";

export default StickyContent;
