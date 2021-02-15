import styled from "styled-components";
import { d } from "../styles/colors";

const Header = () => (
  <Box>
    <Logo>nfrid.me</Logo>
    <Nav>
      <Item href="https://nfrid.me">Test</Item>
      <Item href="https://nfrid.me">Test</Item>
      <Item active href="https://nfrid.me">
        Test
      </Item>
      <Item href="https://nfrid.me">Test</Item>
      <Item href="https://nfrid.me">Test</Item>
    </Nav>
  </Box>
);

export default Header;

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

const Item = styled.a<{ active?: boolean }>`
  text-decoration: none;
  padding: 1em 0.5em;
  color: ${(props) => (props.active ? d.greenish : d.yellowish)};
  transition: 0.2s;

  &:hover {
    color: ${(props) => (props.active ? d.orange : d.purpleish)};
  }
`;
