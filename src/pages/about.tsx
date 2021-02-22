import * as React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../layout";
import { Tit, Par, Em } from "../components";

import PageProps from "../ifaces/PageProps";

const AboutPage: React.FC<PageProps> = ({ location }) => (
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
        <Layout location={location} seo={{ title: "About" }}>
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

export default AboutPage;

const QueryMeta = graphql`
  query QueryMeta {
    site {
      siteMetadata {
        lastUpdate
      }
    }
  }
`;
