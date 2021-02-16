import React, { ReactChild } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global";
import Header from "../components/Header";
import Head from "../components/Head";
import Footer from "../components/Footer";

interface ILayoutProps {
  children: ReactChild;
  location: {
    pathname: string;
  };
}

export default ({ children, location }: ILayoutProps) => {
  return (
    <Flex>
      <GlobalStyle />
      <Head pathname={location.pathname} />
      <Header />
      <Box>{children}</Box>
      <Footer />
      <a rel="me" href="https://mastodon.ml/@nf" />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Box = styled.div`
  margin: 1.5em 10vw;
  text-align: justify;
`;
