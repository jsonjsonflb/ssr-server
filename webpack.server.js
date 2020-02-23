const path = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

const config = {
  mode: 'development',
  target: 'node', // 编译以在类似Node.js的环境中使用（使用Node.js需要加载块）
  watch: true,
  externals: [nodeExternals()], //  为了不把node_modeuls目录下的第三方模块打包进输出文件中
  entry: './src/server/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    chunkFilename: '[name].[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 向前两个loader，确保都加上前缀
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
};

module.exports = merge(baseConfig, config);
