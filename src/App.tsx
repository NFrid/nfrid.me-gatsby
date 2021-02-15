import Index from "./pages/Index";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const icons = [
      "🗿",
      "👽️",
      "👌",
      "🙃",
      "😋",
      "🤔",
      "🤤",
      "👺",
      "😈",
      "😎",
      "😳",
      "😱",
      "😖",
      "🤡",
      "😼",
      "🤘🏻",
      "🅱️",
      "🤣",
    ];
    const icon = icons[Math.floor(Math.random() * icons.length)];

    const favicon: any = document.querySelector("link[rel=icon]");
    favicon.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`;
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Index />
      <Footer />
    </>
  );
};

export default App;
