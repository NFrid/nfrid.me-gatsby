import React, { ReactChild } from "react";
import styled from "styled-components";
import { YMInitializer } from "react-yandex-metrika";

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
      <YMInitializer accounts={[72555754]} />
      <GlobalStyle />
      <Head pathname={location.pathname} />
      <Header />
      <Box>{children}</Box>
      <Footer />
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
