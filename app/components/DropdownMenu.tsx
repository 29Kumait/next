import React from "react";
import * as stylex from "@stylexjs/stylex";
import { globalTokens, text } from "../globalTokens.stylex";
import { descriptionStyles } from "./Description";

const dropdownStyles = stylex.create({
  dropdown: {
    display: "none",
    fontSize: text.sm,
    maxWidth: globalTokens.maxWidth,
    width: "100%",
    zIndex: 10,
    fontFamily: globalTokens.fontMono,
    position: "relative",
  },
  dropdownVisible: {
    display: "block",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    position: "relative",
  },
});

const DropdownMenu: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div
      {...stylex.props(
        dropdownStyles.dropdown,
        isVisible && dropdownStyles.dropdownVisible,
      )}
    >
      <a {...stylex.props(descriptionStyles.descP, dropdownStyles.a)} href="#">
        Item
      </a>
      <a {...stylex.props(descriptionStyles.descP, dropdownStyles.a)} href="#">
        Item
      </a>
      <a {...stylex.props(descriptionStyles.descP, dropdownStyles.a)} href="#">
        Item
      </a>
    </div>
  );
};

export default DropdownMenu;
