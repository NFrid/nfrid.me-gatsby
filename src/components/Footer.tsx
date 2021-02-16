import React from "react";
import styled from "styled-components";
import { d } from "../styles/colors";

const Box = styled.div`
  margin-top: auto;
  background-color: ${d.bgd};
  color: ${d.fg};
  text-align: center;
  font-size: 12px;
  padding: 0.5em;
`;

const Footer = () => <Box>© Nick Friday aka undefined, 2021</Box>;

export default Footer;
