import { createGlobalStyle } from "styled-components";
import d from "./draculaColors";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: ${d.bg};
    height: 100vh;
    padding: 2em;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
