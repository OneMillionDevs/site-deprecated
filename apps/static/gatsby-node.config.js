/**
 * @function createMarkdownNode
 * @description Explicitity extract Frontmatter metadata.
 * @version 0.0.1
 * @author kames
 */
const createMarkdownNode = (actions, node) => {
  const { createNodeField } = actions
  const frontmatter = node.frontmatter

  /**
   * @name GenerateSlug
   * @description Manage converting the markdown metadata to a meaningful slug.
   */
  createNodeField({
    name: "slug",
    node,
    value: `/${generateSlug(frontmatter.template, frontmatter.alias)}`,
  })
  /**
   * @name Template
   * @description Use the template field to select to the corresonding template in src/templates
   */
  createNodeField({
    name: "template",
    node,
    value: `${frontmatter.template}`,
  })
}

/**
 * @function createMarkdownPage
 * @description Explicitity extract Frontmatter metadata.
 * @version 0.0.1
 * @author kames
 */
const createMarkdownPage = (posts) => {
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: markdownSelectTemplate(node.fields.template),
      context: {
        id: node.id
      },
    })
  })
}

/**
 * @function markdownSelectTemplate
 * @param {String} template 
 * @type utility function
 */
const markdownSelectTemplate = template => ({
  content: path.resolve(__dirname, "./src/components/templates/Content/index.jsx"),
}[template || 'content'])




/* --- Heleprs --- */
const generateSlug = (template, alias) => ({
  content: `${alias}`,
  article: `article/${alias}`,
  coverage: `coverage/${alias}`,
  news: `news/${alias}`,
  resource: `resource/${alias}`,
}[template || 'content'])