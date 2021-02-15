import Index from "./pages/Index";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Index />
    <Footer />
  </>
);

export default App;
