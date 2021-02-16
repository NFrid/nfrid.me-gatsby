import * as React from "react";
import { Par, Tit } from "../components/primitives";

import Layout from "../layout/index";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default ({ location }: IndexPageProps) => {
  return (
    <Layout location={location}>
      <>
        <Tit>404 - Page Not Found</Tit>
        <Par>There's no such page as {location.pathname}...</Par>
      </>
    </Layout>
  );
};
