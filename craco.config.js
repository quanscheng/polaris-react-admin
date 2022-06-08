/* craco.config.js */
const path = require(`path`);
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "	rgba(92, 95, 98, 1)" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
