import { graphql, StaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { c } from "../styles/colors";

const Footer: React.FC = () => (
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
          Powered by{" "}
          <a
            target="_blank"
            rel="noreferrer nofollow"
            style={{ color: c.redish, fontWeight: "bold" }}
            href="https://www.gatsbyjs.com/"
          >
            Gatsby
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="norefferer nofollow"
            style={{ color: c.pinkish, fontWeight: "bold" }}
            // href="#"
          >
            anime
          </a>
        </MBox>
        <div>© 2021 Nick Friday a.k.a. undefined</div>
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
  rel: "me noreferrer nofollow",
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
