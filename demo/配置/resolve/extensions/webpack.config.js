const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
    ]
  },
  resolve: {
    extensions: ['.txt', '.js', '.json']
  }
};