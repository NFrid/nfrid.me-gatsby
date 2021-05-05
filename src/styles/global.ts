import { createGlobalStyle } from "styled-components";
import { c } from "./colors";

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
      box-sizing: border-box;
  }

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
    background: ${c.bg};
    margin: 0;
    padding: 0;
    color: ${c.grayish};
    line-height: 1.75em;
  }

  a {
    text-decoration: none;
    color: ${c.yellowish};
    transition: 0.2s;

    &:hover {
      color: ${c.purpleish};
    }
  }
`;

export default GlobalStyle;
