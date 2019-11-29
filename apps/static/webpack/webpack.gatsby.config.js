export const defineWebpackPlugins = (actions, plugins) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.provide({
        React: 'react',
      }),
      plugins.provide({
        PropTypes: 'prop-types',
      }),
    ],
  });
};
