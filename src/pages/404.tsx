import * as React from "react";
import { Par, Tit } from "../components/primitives";

import Layout from "../layout/index";

import PageProps from "../ifaces/PageProps";

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <Tit>404 - Page Not Found</Tit>
        <Par>There&apos;s no such page as {location.pathname}...</Par>
      </>
    </Layout>
  );
};

export default NotFoundPage;
