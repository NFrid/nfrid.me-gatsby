import * as React from "react";

import Layout from "../../layout/index";

import PageProps from "../../types/PageProps";
import Blog from "../../components/Blog";

const TechBlogPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Technology blog",
        desc: "My technology blog | Nick Friday the Tech Man",
        back: true,
      }}
    >
      <>
        <Blog path="tech/" />
      </>
    </Layout>
  );
};

export default TechBlogPage;
