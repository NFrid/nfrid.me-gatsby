import * as React from "react";

import Layout from "../layout/index";

import { Tit } from "../components";
import { Link } from "gatsby";

import PageProps from "../ifaces/PageProps";

const DevPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <Tit>Me? Developer!</Tit>
        <Link to={`${location.pathname}skills`}>Ma skills</Link>
      </>
    </Layout>
  );
};

export default DevPage;
