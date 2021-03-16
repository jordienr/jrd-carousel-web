const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
  filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      files: {
        css: ['./src/css/style.css']
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ],
  module: {
    rules: [
      {
      test: /\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader' }
      ],
      },
    ],
  }
};