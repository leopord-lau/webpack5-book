const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: [
            //     ['@babel/preset-env', { targets: "defaults" }]
            //   ]
            // }
          }
        ]
      }
    ]
  }
}