import * as React from "react";
import { graphql } from "gatsby";

import Layout from "./index";

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
        lang: string;
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
    desc: frontmatter.excerpt,
    lang: frontmatter.lang,
    article: true,
    back: true,
  };

  return (
    <Layout location={location} seo={seo}>
      <PostWrapper>
        <Date>{frontmatter.date}</Date>
        <Excerpt text={frontmatter.excerpt} />
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PostWrapper>
    </Layout>
  );
};

export default PostPage;

const PostWrapper = styled.div`
  & * {
    font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;

    h1,
    h2,
    h3,
    h4 {
      color: ${c.purpleish};
    }

    p {
      margin-bottom: 1.5em;

      em {
        color: ${c.greenish};
      }

      strong {
        color: ${c.orange};

        em {
          color: ${c.pinkish};
        }
      }
    }
  }
  @media (min-width: 901px) {
    padding: 0 10%;
  }

  @media (min-width: 1201px) {
    padding: 0 20%;
    p {
      font-size: 21px;
      line-height: 32px;
    }
  }
`;

const Date = styled.h4`
  color: ${c.redish};
  text-decoration: cursive;
`;

const Excerpt: React.FC<{ text: string }> = ({ text }) => (
  <p style={{ color: c.gray }}>
    ▋ <cite>{text}</cite>
  </p>
);

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        lang
        excerpt
      }
    }
  }
`;
