import * as React from "react";

import Layout from "../../layout/index";
import { BackTit } from "../../components/primitives";
import Menu from "../../components/Menu";

import PageProps from "../../ifaces/PageProps";

export default ({ location }: PageProps) => {
  return (
    <Layout location={location}>
      <>
        <BackTit>Ma skills (W.I.P, just for demo)</BackTit>
        <Menu>
          <Menu title="Web">
            <Menu title="Front-end">
              <Menu title="JS Frameworks">
                <div title="Reactive">
                  <ul>
                    <li>React ♡</li>
                    <li>Vue</li>
                  </ul>
                </div>
                <div title="Static">
                  <ul>
                    <li>Gatsby</li>
                  </ul>
                </div>
                <div title="SSR">
                  <ul>
                    <li>Next.JS</li>
                    <li>Nuxt.JS (not really much)</li>
                  </ul>
                </div>
              </Menu>
              <Menu title="Styling">
                <div title="CSS Frameworks">
                  <ul>
                    <li>Bootstrap</li>
                    <li>Material UI (+ Materialize)</li>
                    <li>Chakra (not really much)</li>
                  </ul>
                </div>
                <div title="Preprocessors">
                  <ul>
                    <li>SASS/SCSS</li>
                    <li>Less</li>
                  </ul>
                </div>
                <div title="JS">
                  <ul>
                    <li>Styled Components</li>
                    <li>React's CSS in JS</li>
                  </ul>
                </div>
              </Menu>
            </Menu>
            <div title="Back-end">
              W.I.P actually.
              <ul>
                <li>Node.JS and stuff</li>
                <li>Some BD</li>
              </ul>
            </div>
          </Menu>
          <div title="W.I.P">There're more I didn't put here yet!</div>
        </Menu>
      </>
    </Layout>
  );
};
