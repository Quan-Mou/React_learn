const CracoLessPlugin = require('craco-less');
const Path = require("path");
const resolve = dir => Path.resolve(__dirname, dir);
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'red' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      "comment": resolve("src/comment")
    }
  }
};