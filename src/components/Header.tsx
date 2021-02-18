import React from "react";
import styled from "styled-components";

import Link from "./Link";
import { c } from "../styles/colors";

const Header = () => (
  <Box>
    <Logo>nfrid.me</Logo>
    <Nav>
      <Link to="/">Index</Link>
      <Link nested to="/about/">
        About
      </Link>
      <Link nested to="/dev/">
        Dev
      </Link>
      <Link nested to="/todo/">
        Todo
      </Link>
    </Nav>
  </Box>
);

export default Header;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${c.bgd};
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Logo = styled.h1`
  color: ${c.greenish};
  font-size: 1.5rem;
`;

const Nav = styled.div`
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
