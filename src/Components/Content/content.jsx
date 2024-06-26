import * as stylex from "@stylexjs/stylex";

const stylesContent = stylex.create({
  commonDiv: {
    height: "auto",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient1: {
    background:
      "linear-gradient(to bottom right, var(--color-grad1-start), var(--color-grad1-end))",
  },
  gradient2: {
    background: "linear-gradient(to right, #A66CFF 50%, #9C9EFE 50%)",
  },
  image: {
    objectFit: "cover",
  },
  largeImage: {
    width: "300px",
    height: "300px",
  },
  autoWidthImage: {
    width: "auto",
  },
});

export const content = [
  {
    title: "⓵",
    content: (
      <div {...stylex.props(stylesContent.commonDiv, stylesContent.gradient1)}>
        a title
      </div>
    ),
  },
  {
    title: "②",
    content: (
      <div>
        {/*<img*/}
        {/*  src="/IMG.svg"*/}
        {/*  alt="set ico"*/}
        {/*  {...stylex.props(stylesContent.image, stylesContent.largeImage)}*/}
        {/*/>*/}
      </div>
    ),
  },
  {
    title: "⓷",
    content: (
      <div {...stylex.props(stylesContent.commonDiv, stylesContent.gradient2)}>
        a title
      </div>
    ),
  },
  {
    title: "⓸",
    content: (
      <div>
        titled
        {/*<img src="/G.svg" alt="ico" {...stylex.props(stylesContent.image)} />*/}
        <div {...stylex.props(stylesContent.commonDiv)}></div>
      </div>
    ),
  },
  {
    title: "⓹",
    content: (
      <div {...stylex.props(stylesContent.commonDiv)}>
        {/* <img
          src="/"
          alt="svg ico"
          {...stylex.props(stylesContent.image, stylesContent.autoWidthImage)}
        /> */}
      </div>
    ),
  },
];
