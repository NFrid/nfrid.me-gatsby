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
