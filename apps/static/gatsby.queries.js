/**
 * @function queryMarkdownPages
 * @description Query the nodes created and available via MDX.
 * @version 0.0.1
 * @author kames
 */
const queryMarkdownPages = async () => {
  const query = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
              template
            }
          }
        }
      }
    }
  `)
  if (query.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  return {
    edges: query.data.allMdx.edges,
    query
  }
}