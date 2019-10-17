const path = require('path');
const { createFilePath } = require("gatsby-source-filesystem")

const generateSlug = (template, alias) => ({
  content: `${alias}`,
  article: `article/${alias}`,
}[template || 'content'])


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    // const value = createFilePath({ node, getNode })
    const frontmatter = node.frontmatter
    createNodeField({
      name: "slug", // Name of the field you are adding
      node, // Individual MDX node
      value: `/${generateSlug(frontmatter.template, frontmatter.alias)}`,
    })
    createNodeField({
      name: "template", // Name of the field you are adding
      node, // Individual MDX node
      value: `${frontmatter.template}`,
    })
  }

}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
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
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges

  const templates = template => ({
    content: path.resolve(__dirname,"./src/components/templates/Content/index.jsx"),
    article: path.resolve(__dirname,"./src/components/templates/Article/index.jsx"),
  }[template || 'article'])

  const generatePath = (template, slug) => ({
    content: `${slug}`,
    article: `article${slug}`,
  }[template || 'content'])

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: templates(node.fields.template),
      context: { 
        id: node.id
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
  actions.setWebpackConfig({

    plugins: [
      plugins.provide({
        'React': 'react'
      }),
      plugins.provide({
        'PropTypes': 'prop-types'
      }),
      plugins.provide({
        'A': '@horizin/design-system'
      }),
    ],
  })
}

