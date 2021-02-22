import * as React from "react";
import { graphql } from "gatsby";

import Layout from "./index";
import { BackTit, Par } from "../components";

import PageProps from "../ifaces/PageProps";
import styled from "styled-components";
import { c } from "../styles/colors";

interface PostProps extends PageProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        path: string;
        title: string;
        date: string;
        excerpt: string;
      };
    };
  };
}

const PostPage: React.FC<PostProps> = ({ location, data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const seo = {
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.excerpt + " | article by Nick Friday",
    article: true,
  };

  return (
    <Layout location={location} seo={seo}>
      <>
        <BackTit>{frontmatter.title}</BackTit>
        <Date>{frontmatter.date}</Date>
        <Par dangerouslySetInnerHTML={{ __html: html }} />
      </>
    </Layout>
  );
};

export default PostPage;

const Date = styled.h4`
  color: ${c.redish};
  text-decoration: cursive;
`;

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        excerpt
      }
    }
  }
`;
