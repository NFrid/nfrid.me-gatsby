import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Par } from ".";
import { c } from "../styles/colors";

interface IProps {
  path?: string;
}

interface IData {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          date: string;
          excerpt: string;
          path: string;
        };
      };
    }[];
  };
}

interface IArt {
  title: string;
  date: string;
  excerpt: string;
  path: string;
  blog?: string;
}

const Refs: React.FC<IProps> = ({ path }) => {
  const data: IData = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              path
            }
          }
        }
      }
    }
  `);

  const arts: IArt[] = path
    ? data.allMarkdownRemark.edges
        .filter((e) => e.node.frontmatter.path.match(`^/blog/${path}`))
        .map((e) => ({
          title: e.node.frontmatter.title,
          date: e.node.frontmatter.date,
          excerpt: e.node.frontmatter.excerpt,
          path: e.node.frontmatter.path,
        }))
    : data.allMarkdownRemark.edges.map((e) => ({
        title: e.node.frontmatter.title,
        blog: e.node.frontmatter.path.split("/")[2],
        date: e.node.frontmatter.date,
        excerpt: e.node.frontmatter.excerpt,
        path: e.node.frontmatter.path,
      }));

  return arts.length === 0 ? (
    <Par>There&apos;s nothing right now | Здесь пока пусто :{"("}</Par>
  ) : (
    <>
      {arts.map((art, id) => (
        <BlogWrapper key={id}>
          {art.blog ? (
            <Link to={`/blog/${art.blog}`} style={{ color: c.pinkish }}>
              [{art.blog}]
            </Link>
          ) : (
            <></>
          )}
          <Link style={{ fontSize: "1.3em", fontWeight: "bold" }} to={art.path}>
            {art.title}
          </Link>
          <i style={{ color: c.redish }}>
            {"<"}
            {art.date}
            {">"}
          </i>
          <Par>{art.excerpt}</Par>
          <hr />
        </BlogWrapper>
      ))}
    </>
  );
};

export default Refs;

const BlogWrapper = styled.div`
  margin-top: 2rem;

  & * {
    margin: 1rem 0.5rem;
  }

  @media (min-width: 901px) {
    padding: 0 10%;
  }

  @media (min-width: 1201px) {
    padding: 0 20%;
  }
`;
