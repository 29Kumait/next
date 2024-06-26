import { useLocation } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { styleApp } from "../../App.jsx";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home-page";

  if (!isHomePage) {
    return <h1 {...stylex.props(styleApp.test)}>Test</h1>;
  }
  return null;
}

export default Header;
