export const defineWebpackPlugins = (actions, plugins) => {
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
      plugins.provide({
        'Atom': '@horizin/design-system'
      }),
    ],
  })
}