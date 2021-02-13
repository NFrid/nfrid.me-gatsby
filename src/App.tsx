import styled from "styled-components";
import d from "./styles/draculaColors";

const Body = styled.div`
  background: ${d.bg};
  height: 100vh;
  padding: 2em;
`;

const Box = styled.div`
  margin: 1.5em 10vw;
  text-align: justify;
`;

const Title = styled.h1`
  text-align: center;
  color: ${d.greenish};
`;

const Subtitle = styled.h2`
  text-align: center;
  color: ${d.purpleish};
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: ${d.fg};
`;

const RefBox = styled(Box)`
  margin: 5em 0;
  & * {
    display: block;
    text-align: right;
  }
`;

const RefTitle = styled(Title)`
  color: ${d.redish};
  font-size: 20px;
`;

const Ref = styled.a.attrs({
  target: "_blank",
})`
  text-decoration: none;
  color: ${d.yellowish};
  margin-bottom: 0.5em;
  font-size: 14px;
  target: _blank;
`;

const App = () => (
  <Body>
    <Box>
      <Title>nfrid.me</Title>
      <Subtitle>Nick Friday's personal website</Subtitle>
      <Paragraph>
        This website isn't completed right now. Please stay tuned!!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <Title>👽️</Title>
      <RefBox>
        <RefTitle>Some useful links</RefTitle>
        <Ref href="https://github.com/NFrid/nfrid.me">
          Project's GitHub page
        </Ref>
        <Ref href="https://bit.ly/2JqTOBQ">Very important stuff !!</Ref>
      </RefBox>
    </Box>
  </Body>
);

export default App;
