import * as stylex from "@stylexjs/stylex";
import { globalTokens, spacing, text } from "../../styles/globalTokens.stylex";
import { tokens } from "../../styles/CardTokens.stylex";

type Props = Readonly<{
  href: string;
  title: string;
  body: string;
}>;

const Card = ({ href, title, body }: Props) => (
  <a href={href} {...stylex.props(cardStyles.card)}>
    <h2 {...stylex.props(cardStyles.cardH2)}>
      {title} <span {...stylex.props(cardStyles.cardSpan)}>→</span>
    </h2>
    <p {...stylex.props(cardStyles.cardP)}>{body}</p>
  </a>
);

export default Card;

const MOBILE = "@media (max-width: 700px)";
const REDUCE_MOTION = "@media (prefers-reduced-motion: reduce)";

const cardBgTransparent = `rgba(${globalTokens.cardRGB}, 0)`;
const cardBgTranslucent = `rgba(${globalTokens.cardRGB}, 0.1)`;
const cardBorderTransparent = `rgba(${globalTokens.cardBorderRGB}, 0)`;
const cardBorderHover = `rgba(${globalTokens.cardBorderRGB}, 0.1)`;

const cardStyles = stylex.create({
  card: {
    display: {
      default: "flex",
      [MOBILE]: "block",
    },
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: globalTokens.borderRadius,
    backgroundColor: {
      default: cardBgTransparent,
      ":hover": cardBgTranslucent,
    },
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: {
      default: cardBorderTransparent,
      ":hover": cardBorderHover,
    },
    color: "inherit",
    fontFamily: globalTokens.fontMono,
    padding: spacing.sm,
    transitionProperty: "background-color, border-color",
    transitionDuration: "400ms",
    [tokens.arrowTransform]: {
      default: "translateX(0)",
      ":hover": "translateX(4px)",
    },
    textAlign: "center",
    textDecoration: "none",
  },
  cardH2: {
    fontSize: text.h4,
    fontWeight: 600,
    marginBottom: {
      default: spacing.xs,
      [MOBILE]: spacing.xxs,
    },
  },
  cardSpan: {
    display: "inline-block",
    transitionProperty: "transform",
    transitionDuration: {
      default: "200ms",
      [REDUCE_MOTION]: "0s",
    },
    transform: tokens.arrowTransform,
  },
  cardP: {
    margin: 0,
    opacity: 0.6,
    fontSize: text.p,
    lineHeight: 1.5,
    maxWidth: "30ch",
    textWrap: "balance",
  },
  toggleButton: {
    backgroundColor: "transparent",
    borderStyle: "none",
    cursor: "pointer",
    fontSize: text.sm,
    marginRight: spacing.sm,
  },
});
