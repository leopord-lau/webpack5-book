const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    port: 8080,
    hot: true,
  },
  module: {
    // 先在dist/jquery.js添加import
    // 之后注释掉下方的代码，即可查看webpack是否忽略对配置文件的解析
    noParse: /jquery/
  }
};