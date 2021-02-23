import * as React from "react";

import Layout from "../../layout/index";

import PageProps from "../../ifaces/PageProps";
import Blog from "../../components/Blog";

const EtcBlogPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Прочий блог",
        desc: "Прочий блог | Ник Пятница Блохер",
        lang: "ru",
        back: true,
      }}
    >
      <>
        <Blog path="etc/" />
      </>
    </Layout>
  );
};

export default EtcBlogPage;
