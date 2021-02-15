import { createGlobalStyle } from "styled-components";
import { d } from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Verdana, Helvetica, sans-serif;
    background: ${d.bg};
    height: 100vh;
    padding: 2em;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
