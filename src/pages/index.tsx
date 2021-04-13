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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
    href: "https://github.com/NFrid/nfrid.me",
  },
  {
    text: "Very important stuff !!",
    href: "https://bit.ly/2JqTOBQ",
  },
];
