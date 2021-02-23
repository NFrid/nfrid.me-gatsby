import * as React from "react";

import Layout from "../../layout/index";

import { Link } from "gatsby";

import PageProps from "../../ifaces/PageProps";

const DevPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Dev",
        desc: "Me as a developer | Nick Friday the Dev",
      }}
    >
      <>
        <Link to={`/dev/skills`}>Ma skills</Link>
      </>
    </Layout>
  );
};

export default DevPage;
