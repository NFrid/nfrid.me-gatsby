import styled from "styled-components";
import { d } from "../styles/colors";

const Box = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${d.bgd};
  color: ${d.fg};
  text-align: center;
  font-size: 12px;
  padding: 0.5em;
`;

const Footer = () => <Box>{"e".repeat(500)}</Box>;

export default Footer;
