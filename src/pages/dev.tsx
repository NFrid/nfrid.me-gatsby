import * as React from "react";

import Layout from "../layout/index";

import { Tit } from "../components/primitives";
import { Link } from "gatsby";

import PageProps from "../ifaces/PageProps";

export default ({ location }: PageProps) => {
  return (
    <Layout location={location}>
      <>
        <Tit>Me? Developer!</Tit>
        <Link to={`${location.pathname}skills`}>Ma skills</Link>
      </>
    </Layout>
  );
};
