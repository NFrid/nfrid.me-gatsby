import * as React from "react";

import Layout from "../../layout/index";

import PageProps from "../../types/PageProps";
import Blog from "../../components/Blog";

const FicBlogPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Околохудожественный блог",
        desc: "Околохудожественный блог | Ник Пятница Блохер",
        lang: "ru",
        back: true,
      }}
    >
      <>
        <Blog path="fic/" />
      </>
    </Layout>
  );
};

export default FicBlogPage;
