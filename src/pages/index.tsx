import * as React from "react";

import Layout from "../layout/index";

import { Tit, Par } from "../components";
import Refs from "../components/Refs";

import PageProps from "../types/PageProps";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <Par>
          This website isn&apos;t completed right now. Please stay tuned!!
        </Par>
        <Par>
          Really - it won't be completed. I am making (or already made){" "}
          <a href="https://nfrid.me" target="_blank">a new one</a>.
          <br/>
          I keep this version on 'old' subdomain cuz why not.
        </Par>
        <Tit>👽️</Tit>
        <Refs title="Some useful links" refs={refs} />
      </>
    </Layout>
  );
};

export default IndexPage;

const refs = [
  {
    text: "Project's GitHub page",
    href: "https://github.com/NFrid/nfrid.me-gatsby",
  },
  {
    text: "Very important stuff !!",
    href: "https://bit.ly/2JqTOBQ",
  },
];
