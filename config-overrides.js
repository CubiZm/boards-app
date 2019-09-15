const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssFocusWithin = require('postcss-focus-within');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssFocusWithin({ replaceWith: '.focus-within' })
  ]
});
