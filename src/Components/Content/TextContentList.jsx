import PropTypes from "prop-types";
import TextContentItem from "./TextContentItem";
import * as stylex from "@stylexjs/stylex";

const stylesSpacer = stylex.create({
  textContainer: {
    maxWidth: "50rem",
    height: "50rem",
  },
  spacer: {
    height: "71px",
  },
});

const TextContentList = ({ content, activeCard }) => {
  return (
    <div {...stylex.props(stylesSpacer.textContainer)}>
      {content.map((item, index) => (
        <TextContentItem
          key={item.title + index}
          item={item}
          index={index}
          activeCard={activeCard}
        />
      ))}
      <div {...stylex.props(stylesSpacer.spacer)} />
    </div>
  );
};

export default TextContentList;

TextContentList.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeCard: PropTypes.object.isRequired,
};
