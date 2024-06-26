import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import StickyContent from "./StickyContent";
import * as stylex from "@stylexjs/stylex";
import TextContentList from "../Content/TextContentList";
import { colors } from "./tokens.stylex";

const stylesStickyScrollContainer = stylex.create({
  stickyScrollContainer: {
    height: "50rem",
    overflowY: "auto",
    display: "flex",
    justifyContent: "space-around",
    position: "relative",
    padding: "29px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  },
  gradient1: {
    backgroundImage: `linear-gradient(to bottom right, ${colors.grad1Start}, ${colors.grad1End})`,
  },
  gradient2: {
    backgroundImage: `linear-gradient(to bottom right, ${colors.grad2Start}, ${colors.grad2End})`,
  },
  gradient3: {
    backgroundImage: `linear-gradient(to bottom right, ${colors.grad3Start}, ${colors.grad3End})`,
  },
  gradient4: {
    backgroundImage: `linear-gradient(to bottom right, ${colors.grad4Start}, ${colors.grad4End})`,
  },
  gradient5: {
    backgroundImage: `linear-gradient(to bottom right, ${colors.grad5Start}, ${colors.grad5End})`,
  },
  bg1: {
    backgroundColor: colors.bg1,
  },
  bg2: {
    backgroundColor: colors.bg2,
  },
  bg3: {
    backgroundColor: colors.bg3,
  },
});

const StickyScrollContainer = ({ content = [] }) => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef(null);
  const stickyContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && content.length) {
        const scrollHeight =
          scrollContainerRef.current.scrollHeight -
          scrollContainerRef.current.clientHeight;
        const scrollTop = scrollContainerRef.current.scrollTop;
        const scrollProgress = scrollTop / scrollHeight;
        const activeCardIndex = Math.round(
          scrollProgress * (content.length - 1),
        );
        setActiveCard(activeCardIndex);
      }
    };

    const containerRefCurrent = scrollContainerRef.current;
    containerRefCurrent?.addEventListener("scroll", handleScroll);

    return () => {
      containerRefCurrent?.removeEventListener("scroll", handleScroll);
    };
  }, [content.length]);

  const backgroundColors = [
    stylesStickyScrollContainer.bg1,
    stylesStickyScrollContainer.bg2,
    stylesStickyScrollContainer.bg3,
  ];

  const gradients = [
    stylesStickyScrollContainer.gradient1,
    stylesStickyScrollContainer.gradient2,
    stylesStickyScrollContainer.gradient3,
    stylesStickyScrollContainer.gradient4,
    stylesStickyScrollContainer.gradient5,
  ];

  return (
    <div
      {...stylex.props(
        stylesStickyScrollContainer.stickyScrollContainer,
        backgroundColors[activeCard % backgroundColors.length],
      )}
      ref={scrollContainerRef}
    >
      <TextContentList content={content} activeCard={activeCard} />
      <StickyContent
        ref={stickyContentRef}
        gradientStyle={gradients[activeCard % gradients.length]}
      >
        {content[activeCard] && content[activeCard].content
          ? content[activeCard].content
          : null}
      </StickyContent>
    </div>
  );
};

StickyScrollContainer.propTypes = {
  content: PropTypes.array.isRequired,
};

export default StickyScrollContainer;
