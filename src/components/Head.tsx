import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

interface IHeadProps {
  pathname: string;
  meta?: {
    title?: string;
    desc?: string;
    thumbnail?: string;
    article?: boolean;
    lang?: string;
    back?: boolean;
  };
}

const Head: React.FC<IHeadProps> = ({ pathname, meta }) => (
  <StaticQuery
    query={QueryHead}
    render={({
      site: {
        siteMetadata: {
          site,
          defaultTitle,
          altTitle,
          titleTemplate,
          altTitleTemplate,
          description,
          altDescription,
          language,
          siteUrl,
        },
      },
    }) => {
      meta
        ? meta.lang
          ? {}
          : (meta.lang = language)
        : (meta = { lang: "en" });
      const seo = {
        title: meta.title
          ? meta.title
          : meta.lang === "en"
          ? defaultTitle
          : altTitle,
        desc:
          (meta.desc
            ? meta.desc
            : meta.lang === "en"
            ? description
            : altDescription) +
          (meta.article ? " | article by Nick Friday." : ""),
        image: meta.thumbnail
          ? meta.thumbnail
          : `${siteUrl}/assets/thumbnail.png`,
        url: `${siteUrl}${pathname}`,
        lang: meta.lang,
      };
      return (
        <Helmet
          title={seo.title}
          titleTemplate={seo.lang === "en" ? titleTemplate : altTitleTemplate}
        >
          <html lang={seo.lang} />

          <meta name="description" content={seo.desc} />
          <meta name="image" content={seo.image} />
          <meta name="application-name" content={site} />
          <link rel="canonical" href={seo.url} />

          <meta property="og:url" content={seo.url} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.desc} />
          <meta property="og:image" content={seo.image} />
          {meta.article && <meta property="og:type" content="article" />}

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content={site} />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.desc} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="twitter:url" content={seo.url} />
        </Helmet>
      );
    }}
  />
);

export default Head;

const QueryHead = graphql`
  query QueryHead {
    site {
      siteMetadata {
        site
        siteUrl
        defaultTitle: title
        altTitle
        titleTemplate
        altTitleTemplate
        description
        altDescription
        language
      }
    }
  }
`;
