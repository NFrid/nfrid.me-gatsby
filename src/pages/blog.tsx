import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Par } from "../components";
import { c } from "../styles/colors";
import Layout from "../layout/index";

import PageProps from "../types/PageProps";

interface IData {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          date: string;
          excerpt: string;
          path: string;
          tags: string;
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
  tags: string[];
}

const BlogPage: React.FC<PageProps> = ({ location }) => {
  const initArts: IArt[] = [];
  const [arts, setArts] = useState(initArts);

  const initSortTags: string[] = [];
  const [sortTags, setSortTags] = useState(initSortTags);

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
              tags
            }
          }
        }
      }
    }
  `);

  const allArts: IArt[] = data.allMarkdownRemark.edges.map((e) => ({
    title: e.node.frontmatter.title,
    blog: e.node.frontmatter.path.split("/")[2],
    date: e.node.frontmatter.date,
    excerpt: e.node.frontmatter.excerpt,
    tags: e.node.frontmatter.tags ? e.node.frontmatter.tags.split(",") : [],
    path: e.node.frontmatter.path,
  }));

  useEffect(() => setArts(allArts), []);

  const tags = [
    ...allArts.reduce<Set<string>>((acc, art) => {
      art.tags.forEach((tag) => acc.add(tag));
      return acc;
    }, new Set([])),
  ];

  const tagSort = (tags: string[]) => {
    let sortedArts = allArts;
    tags.forEach((tag) => {
      sortedArts = sortedArts.filter((art) =>
        art.tags ? art.tags.includes(tag) : false
      );
    });
    setArts(sortedArts);
  };

  const tagToggle = (tag: string) => {
    const sTags: Set<string> = new Set(sortTags);
    sTags.has(tag) ? sTags.delete(tag) : sTags.add(tag);
    setSortTags([...sTags]);
    tagSort([...sTags]);
  };

  return (
    <Layout
      location={location}
      seo={{
        title: "Blog",
        desc: "My personal blog | Nick Friday the Blogger",
      }}
    >
      <>
        {tags.map((tag, id) => (
          <>
            <input key={id} onChange={() => tagToggle(tag)} type="checkbox" />{" "}
            {tag}
          </>
        ))}

        {arts.map((art, id) => (
          <BlogWrapper key={id}>
            {art.blog ? (
              <Link to={`/blog/${art.blog}`} style={{ color: c.pinkish }}>
                [{art.blog}]
              </Link>
            ) : (
              <></>
            )}
            <Link
              style={{ fontSize: "1.3em", fontWeight: "bold" }}
              to={art.path}
            >
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
    </Layout>
  );
};

export default BlogPage;

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
