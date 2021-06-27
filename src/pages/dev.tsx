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
          <Menu title="Portfolio">
            <div title="Front only">
              no
            </div>
            <div title="Full sized">
              <ul>
                <li>Well... This site?</li>
                <li>and.. the new one??</li>
              </ul>
              see mainpage.
            </div>
          </Menu>
        </Menu>
      </>
    </Layout>
  );
};

export default SkillsPage;
