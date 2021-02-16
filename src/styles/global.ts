import { createGlobalStyle } from "styled-components";
import { d } from "./colors";

const GlobalStyle = createGlobalStyle`
  html {
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  body {
    font-family: Verdana, Helvetica, sans-serif;
    background: ${d.bg};
    height: 100vh;
    padding: 2em;
    margin: 0;
    padding: 0;
    color: ${d.fg};
    line-height: 2em;
  }

  a {
  text-decoration: none;
  color: ${d.yellowish};
  transition: 0.2s;

  &:hover {
    color: ${d.purpleish};
  }
  }
`;

export default GlobalStyle;
