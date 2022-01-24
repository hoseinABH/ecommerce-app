const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
  reactStrictMode: true,

  framework: {
    name: 'shopify',
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
});
