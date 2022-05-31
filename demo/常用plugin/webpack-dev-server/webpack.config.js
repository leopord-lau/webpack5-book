const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    compress: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin({ title: 'use webpack-dev-server' })],
};
