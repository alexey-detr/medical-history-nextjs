const withCss = require('@zeit/next-css');

module.exports = withCss({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]___[hash:base64:5]',
  },
});
