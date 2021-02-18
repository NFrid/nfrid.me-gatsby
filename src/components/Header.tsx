import React from "react";
import styled from "styled-components";
import { Link, LinkGetProps } from "@reach/router";

import { c } from "../styles/colors";

const Header = () => (
  <Box>
    <Logo>nfrid.me</Logo>
    <Nav>
      <Item to="/">Index</Item>
      <Item nested to="/about/">
        About
      </Item>
      <Item nested to="/dev/">
        Dev
      </Item>
      <Item nested to="/todo/">
        Todo
      </Item>
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

const activeLink = (nested: boolean, className: string) =>
  nested
    ? ({ isPartiallyCurrent }: LinkGetProps) =>
        isPartiallyCurrent ? { className: className + " active" } : {}
    : ({ isCurrent }: LinkGetProps) =>
        isCurrent ? { className: className + " active" } : {};

const SLink = (props: any) => (
  <Link {...props} getProps={activeLink(props.nested, props.className)} />
);

const Item = styled(SLink)`
  padding: 1em 0.5em;

  &.active {
    color: ${c.greenish};
  }

  &:hover {
    &.active {
      color: ${c.orange};
    }
  }
`;
