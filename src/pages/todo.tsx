import * as React from "react";
import styled from "styled-components";

import Layout from "../layout";
import { Tit, Par } from "../components/primitives";
import { d } from "../styles/colors";

interface AboutPageProps {
  location: {
    pathname: string;
  };
}

export default ({ location }: AboutPageProps) => {
  return (
    <Layout location={location}>
      <>
        <Tit>List of things I'm gonna make to this website</Tit>
        <Par>
          <Todos>
            <li>The Portfolio</li>
            Pretty and wholesome The Portfolio of mine as a dev. Almost a CV.
            <li>Big ol' blog</li>
            Big ol' blog in Markdown for makin' articles in English <b>
              and
            </b>{" "}
            Russian on all topics I want. The blog probably will have tags
            feature if Gatsby can do it (Gatsby <b>can</b> for sure)...
            <li>RSS fetcher for my Mastodon and stuff</li>
            Simple RSS fetcher for all stuff I want. For now I suppose it'll be
            Mastodon only, but <b>who knows</b>...
            <li>Fiction stuff for all my books, verses, stories, e.t.c.</li>
            <b>
              <u>
                <i>ONLY</i>
              </u>
            </b>{" "}
            in Russian. I LOVE Russian so I will write my fiction only in it.
            Well, it'll propably be just a database and an online reader. I
            don't like commercials in art so I don't need anything else.
          </Todos>
        </Par>
      </>
    </Layout>
  );
};

const Todos = styled.ul`
  list-style-position: inside;

  li {
    color: ${d.greenish};
    margin: 2em 0 1em 1em;
  }
`;
