const componentWithMDXScope = require('gatsby-plugin-mdx/component-with-mdx-scope');
const path = require('path');
const startCase = require('lodash.startcase');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fields {
                    id
                  }
                  tableOfContents
                  fields {
                    slug
                    language
                    alias
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({node}) => {
          if (node.fields.language === 'en') {
            createPage({
              path: node.fields.alias ? node.fields.alias : '/',
              component: path.resolve('./src/templates/docs.js'),
              context: {
                id: node.fields.id,
              },
            });
          }
        });
      }),
    );
  });
};

exports.onCreateWebpackConfig = ({actions, plugins, stage, loaders}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        global: path.resolve(__dirname, 'src/assets/global'),
        '@root': path.resolve(__dirname, ''),
        '@content': path.resolve(__dirname, 'src/content'),
        '@images': path.resolve(__dirname, 'src/components/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@experiments': path.resolve(__dirname, 'src/components/experiments'),
        '@forms': path.resolve(__dirname, 'src/components/forms'),
        '@regions': path.resolve(__dirname, 'src/components/regions'),
        '@views': path.resolve(__dirname, 'src/components/views'),
      },
    },
    plugins: [
      plugins.provide({
        React: 'react',
      }),
      plugins.provide({
        PropTypes: 'prop-types',
      }),
      plugins.provide({
        GLOBAL: 'global',
      }),
      plugins.provide({
        Atom: '@horizin/design-system-atoms',
      }),
      plugins.provide({
        Molecule: '@horizin/design-system-molecules',
      }),
      plugins.provide({
        Organism: '@horizin/design-system-organisms',
      }),
    ],
  });

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hooks-portal/,
            use: loaders.null(),
          },
          {
            test: /aws-amplify/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.onCreateBabelConfig = ({actions}) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  });
};

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `Mdx`) {
    const frontmatter = node.frontmatter;
    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, '');

    if (value === 'index') {
      value = '';
    }
    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: `slug`,
      node,
      value: frontmatter.category
        ? `/${frontmatter.category}/${frontmatter.alias}`
        : `/${frontmatter.alias}`,
    });
    createNodeField({
      name: `alias`,
      node,
      value: frontmatter.category
        ? `/${frontmatter.category}/${frontmatter.alias}`
        : `/${frontmatter.alias}`,
    });

    createNodeField({
      name: 'language',
      node,
      value: node.frontmatter.language || 'en',
    });
    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });
    createNodeField({
      name: 'subtitle',
      node,
      value: node.frontmatter.subtitle || startCase(parent.name),
    });
  }
};
