import { Box } from "./components/primitives";
import Index from "./pages/Index";
import GlobalStyle from "./styles/global";

const App = () => (
  <>
    <GlobalStyle />
    <Box>
      <Index />
    </Box>
  </>
);

export default App;
