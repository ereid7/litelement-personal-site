const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: 'index.html'
    })
  ],
};

// const config = require('./webpack.config.js');
// const webpack = require('webpack');

// config.plugins.push(
//   new webpack.DefinePlugin({
//     "process.env": {
//       "NODE_ENV": JSON.stringify("production")
//     }
//   })
// );

// config.plugins.push(
//   new config.optimization.minimize({
//     compress: {
//       warnings: false
//     }
//   })
// );

// module.exports = config;