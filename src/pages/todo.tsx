import * as React from "react";
import styled from "styled-components";

import Layout from "../layout";
import { Tit, Par } from "../components";
import { c } from "../styles/colors";

import PageProps from "../ifaces/PageProps";

const TodoPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <Tit>List of things I&apos;m gonna make to this website</Tit>
        <Par>
          <Todos>
            <li>The Portfolio</li>
            Pretty and wholesome The Portfolio of mine as a dev. Almost a CV.
            <li>Big ol&apos; blog</li>
            Big ol&apos; blog in Markdown for makin&apos; articles in English{" "}
            <b>and</b> Russian on all topics I want. The blog probably will have
            tags feature if Gatsby can do it (Gatsby <b>can</b> for sure)...
            <li>RSS fetcher for my Mastodon and stuff</li>
            Simple RSS fetcher for all stuff I want. For now I suppose
            it&apos;ll be Mastodon only, but <b>who knows</b>...
            <li>Fiction stuff for all my books, verses, stories, e.t.c.</li>
            <b>
              <u>
                <i>ONLY</i>
              </u>
            </b>{" "}
            in Russian. I LOVE Russian so I will write my fiction only in it.
            Well, it&apos;ll propably be just a database and an online reader. I
            don&apos;t like commercials in art so I don&apos;t need anything
            else.
          </Todos>
        </Par>
      </>
    </Layout>
  );
};

export default TodoPage;

const Todos = styled.ul`
  list-style-position: inside;

  li {
    color: ${c.greenish};
    margin: 2em 0 1em 1em;
  }
`;
