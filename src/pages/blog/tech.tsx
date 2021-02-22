import * as React from "react";
import { BackTit } from "../../components";

import Layout from "../../layout/index";

import PageProps from "../../ifaces/PageProps";
import Blog from "../../components/Blog";

const TechBlogPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Technologies",
        description: "My technology blog | Nick Friday the Tech Man",
      }}
    >
      <>
        <BackTit>Technologies</BackTit>
        <Blog lang="en" path="tech/" />
      </>
    </Layout>
  );
};

export default TechBlogPage;
