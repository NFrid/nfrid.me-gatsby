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
          <Link href={mastodon}>Mastodon</Link>|
          <Link href={github}>GitHub</Link>|
          <Link href={telegram}>Telegram</Link>
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

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
`;

const MBox = styled.div`
  flex: 1;
  color: ${d.com};
  white-space: nowrap;
`;

const Link = styled.a.attrs({
  rel: "me",
  target: "_blank",
})`
  margin: 0 0.5em;
  text-decoration: none;
  color: ${d.yellowish};
  transition: 0.2s;

  &:hover {
    color: ${d.purpleish};
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
