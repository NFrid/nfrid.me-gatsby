import * as React from "react";
import { BackTit } from "../../components";

import Layout from "../../layout/index";

import PageProps from "../../ifaces/PageProps";
import Blog from "../../components/Blog";

const EtcBlogPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{ title: "Прочее", description: "Прочий блог | Ник Пятница Блохер" }}
    >
      <>
        <BackTit>Прочее</BackTit>
        <Blog lang="ru" path="etc/" />
      </>
    </Layout>
  );
};

export default EtcBlogPage;
