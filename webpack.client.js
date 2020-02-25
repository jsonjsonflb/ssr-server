// 浏览器端代码打包
const path = require('path');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

const configg = {
  mode: 'development',
  watch: true,
  entry: path.join(__dirname, 'src', 'client/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  plugins: [
    new CopyPlugin([
      { from: path.resolve(__dirname, './statics'), to: 'statics' }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 向前两个loader，确保都加上前缀
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
};

module.exports = merge(baseConfig, configg);
