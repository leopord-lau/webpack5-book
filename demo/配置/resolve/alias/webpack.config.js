const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    alias: {
      // components: path.resolve(__dirname, 'src/components'),
      components1$: path.resolve(__dirname, 'src/components/com.js'),
    }
  }
};