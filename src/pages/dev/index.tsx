import * as React from "react";

import Layout from "../../layout/index";

import { Tit } from "../../components";
import { Link } from "gatsby";

import PageProps from "../../ifaces/PageProps";

const DevPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Dev",
        description: "Me as a developer | Nick Friday the Dev",
      }}
    >
      <>
        <Tit>Me? Developer!</Tit>
        <Link to={`${location.pathname}skills`}>Ma skills</Link>
      </>
    </Layout>
  );
};

export default DevPage;
