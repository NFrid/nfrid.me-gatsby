import { graphql, StaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { d } from "../styles/colors";

const Footer = () => (
  <StaticQuery
    query={QueryFooter}
    render={({
      site: {
        siteMetadata: {
          refs: { mastodon, github, telegram },
        },
      },
    }) => (
      <Box>
        <MBox>
          Powered by <b style={{ color: d.redish }}>Gatsby</b> and{" "}
          <b style={{ color: d.pinkish }}>anime</b>
        </MBox>
        <div>© Nick Friday aka undefined, 2021</div>
        <MBox>
          <a rel="me" href={mastodon}>
            Mastodon
          </a>
          |
          <a rel="me" href={github}>
            GitHub
          </a>
          |
          <a rel="me" href={telegram}>
            Telegram
          </a>
        </MBox>
      </Box>
    )}
  />
);

export default Footer;

const Box = styled.div`
  margin-top: auto;
  background-color: ${d.bgd};
  color: ${d.fg};
  text-align: center;
  font-size: 12px;
  /* padding: 0.5em; */

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const MBox = styled.div`
  flex: 1;
  color: ${d.com};
  a {
    margin: 0 0.5em;
    text-decoration: none;
    color: ${d.yellowish};
    transition: 0.2s;

    &:hover {
      color: ${d.purpleish};
    }
  }
`;

const QueryFooter = graphql`
  query QueryFooter {
    site {
      siteMetadata {
        refs {
          mastodon
          github
          telegram
        }
      }
    }
  }
`;
