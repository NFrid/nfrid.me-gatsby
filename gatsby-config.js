const date = new Date().toUTCString();

module.exports = {
  siteMetadata: {
    site: `nfrid.me`,
    title: `🗿`,
    altTitle: `🗿`,
    titleTemplate: `%s - nfrid.me | Nick Friday's personal website`,
    altTitleTemplate: `%s - nfrid.me | Ник Пятница: Личный вебсайт`,
    description: `Cyberland of a modern cyberlandlord, Nick Friday a.k.a. undefined, the Dev, the Blogger, the Writer, the The.`,
    altDescription: `Киберимение современного кибербарина, Ника Пятницы a.k.a. undefined, разработчика, блоггера, писателя, меня.`,
    siteUrl: `https://nfrid.me/`,
    language: `en`,
    refs: {
      mastodon: `https://mastodon.ml/@nf`,
      telegram: `https://t.me/nfrid5`,
      dev: `https://dev.to/nfrid`,
      github: `https://github.com/NFrid`,
    },
    lastUpdate: date,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://nfrid.me",
        sitemap: "https://nfrid.me/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f4f99d`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-routes`,
    //   options: {
    //     path: `${__dirname}/src/routes.ts`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nfrid.me`,
        short_name: `nfrid.me`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        include_favicon: true,
        twitter: "no",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-vercel`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                const fm = edge.node.frontmatter;
                const datesplit = fm.date.split(".");
                const date = new Date(
                  datesplit[2] + "-" + datesplit[1] + "-" + datesplit[0]
                );
                return Object.assign({}, fm, {
                  description: fm.excerpt,
                  date: date,
                  url: site.siteMetadata.siteUrl + fm.path,
                  guid: site.siteMetadata.siteUrl + fm.path,
                  lang: fm.lang,
                  tags: fm.tags,
                  category: fm.path.split("/")[2],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      frontmatter {
                        path
                        title
                        date
                        lang
                        tags
                        excerpt
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Nick Friday's blog feed",
          },
        ],
      },
    },
  ],
};
