import { graphql, StaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { c } from "../styles/colors";

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
          Powered by <b style={{ color: c.redish }}>Gatsby</b> and{" "}
          <b style={{ color: c.pinkish }}>anime</b>
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
  background-color: ${c.bgd};
  color: ${c.fg};
  text-align: center;
  font-size: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
`;

const MBox = styled.div`
  flex: 1;
  color: ${c.com};
  white-space: nowrap;
`;

const Link = styled.a.attrs({
  rel: "me",
  target: "_blank",
})`
  padding: 0.7em 0.5em;
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
