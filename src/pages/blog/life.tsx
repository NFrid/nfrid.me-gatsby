import * as React from "react";
import { BackTit } from "../../components";

import Layout from "../../layout/index";

import PageProps from "../../ifaces/PageProps";
import Blog from "../../components/Blog";

const LifeBlogPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Laif | Жыза",
        description:
          "My life blog - Мой жизнеблог | Nick Friday the Lifer - Ник Пятница не умер",
      }}
    >
      <>
        <BackTit>Laif | Жыза</BackTit>
        <Blog lang="both" path="life/" />
      </>
    </Layout>
  );
};

export default LifeBlogPage;
