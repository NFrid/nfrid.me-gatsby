// render posts
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve(`./src/layout/post.tsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running a query!!`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {},
    });
  });
};

// make rss feed work by adding a slug
// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode });

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     });
//   }
// };
