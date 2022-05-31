const webpack = require('webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      environment: JSON.stringify('development')
    })
  ],
}