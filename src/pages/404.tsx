import * as React from "react";
import { Par } from "../components";

import Layout from "../layout/index";

import PageProps from "../ifaces/PageProps";

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} seo={{ title: "Not Found" }}>
      <>
        <Par>There&apos;s no such page as {location.pathname}...</Par>
      </>
    </Layout>
  );
};

export default NotFoundPage;
