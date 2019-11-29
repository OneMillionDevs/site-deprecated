const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://onemilliondevs.com',
    gaTrackingId: null,
  },
  header: {
    logo:
      'https://pbs.twimg.com/profile_images/1195184664190709761/XOy6nDiE_400x400.jpg',
    logoLink: 'https://onemilliondevs.com',
    title: 'One Million Developers',
    githubUrl: 'https://github.com/OneMillionDevs/site',
    helpUrl: '',
    tweetText: '',
    links: [{text: '', link: ''}],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ['/introduction', '/codeblock'],
    links: [{text: 'Rapid', link: 'https://onemilliondevs.com'}],
    frontline: false,
    ignoreIndex: false,
  },
  siteMetadata: {
    title: 'One Million Developers | Rapid',
    description: 'onemilliondevs.com ',
    ogImage: null,
    docsLocation: 'https://github.com/OneMillionDevs/site/tree/master/content',
    favicon: '',
  },
};

module.exports = config;
