import PropTypes from "prop-types";
import * as stylex from "@stylexjs/stylex";
import ContentListWrapper from "../Content/ContentListWrapper";

const stylesTextContentItem = stylex.create({
  textContent: {
    margin: "80px 0",
    lineHeight: "1.25",
    transition: "opacity 0.3s ease",
  },
  textContentVisible: {
    opacity: 1,
  },
  textContentHidden: {
    opacity: 0.3,
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "rgba(251, 251, 253, 0.73)",
    lineHeight: "1.25",
    borderStyle: "none",
    outline: "none",
    backgroundColor: "transparent",
    width: "100%",
  },
  description: {
    fontSize: "1rem",
    marginTop: "10px",
    marginLeft: "29px",
    color: "#4b51b7",
    borderColor: "#4a86c7",
    borderRadius: "8px",
    borderStyle: "solid",
    borderWidth: "2px",
    display: "flex",
    flexBasis: "0",
    flexGrow: "1",
    height: "auto",
    justifyContent: "center",
    paddingRight: "7px",
    paddingLeft: "7px",
    maxWidth: "calc(80% - 30px)",
  },
  spacer: {
    height: "71px",
  },
});

const TextContentItem = ({ item, index, activeCard }) => {
  const isActive = activeCard === index;

  return (
    <article
      {...stylex.props(stylesTextContentItem.textContent, [
        isActive
          ? stylesTextContentItem.textContentVisible
          : stylesTextContentItem.textContentHidden,
      ])}
      tabIndex={isActive ? 0 : -1}
      aria-current={isActive ? "true" : "false"}
    >
      <h2 {...stylex.props(stylesTextContentItem.title)}>{item.title}</h2>
      <ContentListWrapper
        {...stylex.props(stylesTextContentItem.description)}
      />
    </article>
  );
};

TextContentItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  activeCard: PropTypes.number.isRequired,
};
export default TextContentItem;

// const TextContentItem = ({ item, index, activeCard }) => {
//   const { updateContent, contents } = useContent();
//   const [title, setTitle] = useState(item.title || "");
//
//   useEffect(() => {
//     if (contents[index] && contents[index].title !== title) {
//       setTitle(contents[index].title || "");
//     }
//   }, [contents, index, title]);
//
//   const isActive = activeCard === index;
//
//   const handleTitleChange = (e) => {
//     const newTitle = e.target.value;
//     setTitle(newTitle);
//     updateContent(index, { title: newTitle });
//   };
//
//   if (!item) {
//     return null;
//   }
//
//   return (
//     <article
//       {...stylex.props(stylesTextContentItem.textContent, [
//         isActive
//           ? stylesTextContentItem.textContentVisible
//           : stylesTextContentItem.textContentHidden,
//       ])}
//       tabIndex={isActive ? 0 : -1}
//       aria-current={isActive ? "true" : "false"}
//     >
//       <input
//         type="text"
//         value={title}
//         onChange={handleTitleChange}
//         autoComplete="off" // Added autocomplete attribute
//         {...stylex.props(stylesTextContentItem.title)}
//       />
//       <ContentListWrapper
//         {...stylex.props(stylesTextContentItem.description)}
//       />
//     </article>
//   );
// };
