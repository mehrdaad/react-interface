var path = require('path');
var createNwbWebpackConfig = require('create-nwb-webpack-config');

module.exports = {
  webpackConfig: createNwbWebpackConfig(),
  components: 'src/**/[A-Z]*.js',
  ignore: ['**/components/**/\*Wrapper\.js', '**/components/**/Tip.js'],
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper')
  }
};