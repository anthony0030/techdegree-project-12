const razzleHeroku = require("razzle-heroku");

module.exports = {
  // plugins: ["scss"],
  modifyWebpackConfig: (options) => {
    const { webpackConfig, env, webpackObject } = options;
    return razzleHeroku(webpackConfig, env, webpackObject);
  }
};
