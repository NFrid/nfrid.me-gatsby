import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Par } from ".";
import { c } from "../styles/colors";

interface IProps {
  lang?: string;
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

const Refs: React.FC<IProps> = ({ lang, path }) => {
  const noContent =
    lang === "en"
      ? "There's nothing right now :("
      : lang === "ru"
      ? "Здесь пока пусто :("
      : "There's nothing right now | Здесь пока пусто :(";

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
    <Par>{noContent}</Par>
  ) : (
    <>
      {arts.map((art, id) => (
        <div key={id}>
          {art.blog ? (
            <Link to={`/blog/${art.blog}`} style={{ color: c.redish }}>
              [{art.blog}]
            </Link>
          ) : (
            <></>
          )}{" "}
          <Link style={{ fontSize: "1.3em", fontWeight: "bold" }} to={art.path}>
            {art.title}
          </Link>{" "}
          {"<"}
          <i style={{ color: c.pinkish }}>{art.date}</i>
          {">"}
          <Par>{art.excerpt}</Par>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Refs;
