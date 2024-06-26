import PropTypes from "prop-types";
import StickyScrollContainer from "./StickyScrollContainer";

const StickyScroll = ({ content }) => {
  return <StickyScrollContainer content={content} />;
};

StickyScroll.propTypes = {
  content: PropTypes.array.isRequired,
};

export default StickyScroll;
