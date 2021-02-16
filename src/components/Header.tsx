import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import { d } from "../styles/colors";

export default () => (
  <Box>
    <Logo>nfrid.me</Logo>
    <Nav>
      <Item to="/">Index</Item>
      <Item to="/about/">About</Item>
    </Nav>
  </Box>
);

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${d.bgd};
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Logo = styled.h1`
  color: ${d.greenish};
  font-size: 1.5rem;
`;

const Nav = styled.div`
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
// .attrs({
//   getProps: ({ isCurrent }) => (isCurrent ? { className: "active" } : {}),
// })
const Item = styled(Link)`
  text-decoration: none;
  padding: 1em 0.5em;
  color: ${d.yellowish};
  transition: 0.2s;

  &[aria-current] {
    color: ${d.greenish};
  }

  &:hover {
    color: ${d.purpleish};

    &[aria-current] {
      color: ${d.orange};
    }
  }
`;
