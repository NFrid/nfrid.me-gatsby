import styled from "@emotion/styled";
import d from "./styles/draculaColors";

const Box = styled.div`
  background: ${d.bg};
  height: 100vh;
  padding: 2em;
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
  text-align: justify;
  font-size: 18px;
  color: ${d.fg};
  margin: 1.5em 10vw;
`;

const App = () => (
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
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
    <Title>👽️</Title>
  </Box>
);

export default App;
