import * as React from "react";

import Layout from "../layout/index";
import Menu from "../components/Menu";

import PageProps from "../types/PageProps";

const SkillsPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Dev Skills",
        desc: "Me as a developer | Nick Friday's CV-ish",
      }}
    >
      <>
        <Menu>
          <div title="Actual CVs">
            <ul>
              <li>no</li>
              <li>one</li>
              <li>yet</li>
            </ul>
          </div>
          <div title="Portfolio">
            <ul>
              <li>Well... This site?</li>
              <li>Coming soon: many things!!</li>
            </ul>
          </div>
        </Menu>
      </>
    </Layout>
  );
};

export default SkillsPage;
