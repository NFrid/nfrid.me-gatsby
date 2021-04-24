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
  seo?: {
    title?: string;
    desc?: string;
    thumbnail?: string;
    article?: boolean;
    lang?: string;
  };
}

const DefaultLayout: React.FC<ILayoutProps> = ({ children, location, seo }) => {
  return (
    <Flex>
      <YMInitializer accounts={[72555754]} />
      <GlobalStyle />
      <Head pathname={location.pathname} meta={seo} />
      <Header title={seo ? (seo.title ? seo.title : "") : ""} />
      <Box>{children}</Box>
      <Footer />
    </Flex>
  );
};

export default DefaultLayout;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Box = styled.div`
  margin: 1em 10vw;
`;
