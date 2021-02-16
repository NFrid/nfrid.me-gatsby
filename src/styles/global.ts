import { createGlobalStyle } from "styled-components";
import { d } from "./colors";

const GlobalStyle = createGlobalStyle`
  html {
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
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
  }
`;

export default GlobalStyle;
