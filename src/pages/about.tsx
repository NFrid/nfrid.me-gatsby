import * as React from "react";

import Layout from "../layout";
import { Tit, Par, Em } from "../components/primitives";
import { graphql, StaticQuery } from "gatsby";

interface AboutPageProps {
  location: {
    pathname: string;
  };
}

export default ({ location }: AboutPageProps) => (
  <StaticQuery
    query={QueryMeta}
    render={({
      site: {
        siteMetadata: { lastUpdate },
      },
    }) => {
      const upd = new Date(lastUpdate);
      const updF = upd.toLocaleString("en-GB");
      return (
        <Layout location={location}>
          <>
            <Tit>About this website</Tit>
            <Par>W.I.P. Stay tuned, bla-bla-bla...</Par>
            <Par>
              Last update at <Em>{updF}</Em>.
            </Par>
          </>
        </Layout>
      );
    }}
  />
);

const QueryMeta = graphql`
  query QueryMeta {
    site {
      siteMetadata {
        lastUpdate
      }
    }
  }
`;
