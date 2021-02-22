const date = new Date().toUTCString();

module.exports = {
  siteMetadata: {
    site: `nfrid.me`,
    title: `The`,
    titleTemplate: `%s - nfrid.me`,
    description: `Nick Friday's personal website`,
    siteUrl: `https://nfrid.me/`,
    language: `en`,
    refs: {
      mastodon: `https://mastodon.ml/@nf`,
      telegram: `https://t.me/nfrid5`,
      github: `https://github.com/NFrid`,
    },
    lastUpdate: date,
  },
  plugins: [
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
  ],
};
