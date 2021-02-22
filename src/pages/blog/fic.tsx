import * as React from "react";
import { BackTit } from "../../components";

import Layout from "../../layout/index";

import PageProps from "../../ifaces/PageProps";
import Blog from "../../components/Blog";

const FicBlogPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Околохудожественное",
        description: "Околохудожественный блог | Ник Пятница Блохер",
      }}
    >
      <>
        <BackTit>Околохудожественное</BackTit>
        <Blog lang="ru" path="fic/" />
      </>
    </Layout>
  );
};

export default FicBlogPage;
