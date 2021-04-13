import * as React from "react";

import Layout from "../../layout/index";
import { Link } from "gatsby";

import PageProps from "../../types/PageProps";
import Blog from "../../components/Blog";
import styled from "styled-components";

const BlogPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Blog",
        desc: "My personal blog | Nick Friday the Blogger",
      }}
    >
      <>
        <hr />
        <Nav>
          {"<"}
          <Link to={`/blog/tech`}>[EN] Technologies and stuff</Link>
          <Link to={`/blog/fic`}>[RU] Околохудожественное</Link>
          <Link to={`/blog/etc`}>[RU] Прочее</Link>
          {">"}
        </Nav>
        <hr />
        <Blog />
      </>
    </Layout>
  );
};

export default BlogPage;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2em;
  flex-wrap: wrap;

  & * {
    margin: 0.3em 1em;
    white-space: nowrap;
  }
`;
