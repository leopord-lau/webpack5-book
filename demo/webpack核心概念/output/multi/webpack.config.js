const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    page1: '../src/index.js',
    page2: '../src/main.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    clean: true
  },
};
