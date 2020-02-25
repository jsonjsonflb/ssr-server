const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: 'last 2 chrome versions'
                }
              }
            ],
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         // you can specify a publicPath here
      //         // by default it uses publicPath in webpackOptions.output
      //         publicPath: '../',
      //         hmr: devMode
      //       }
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 2, // 向前两个loader，确保都加上前缀
      //         modules: {
      //           mode: 'local',
      //           localIdentName: '[name]__[local]__[hash:base64:5]'
      //         }
      //       }
      //     },
      //     'postcss-loader',
      //     'sass-loader'
      //   ]
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         // you can specify a publicPath here
      //         // by default it uses publicPath in webpackOptions.output
      //         publicPath: '../',
      //         hmr: devMode
      //       }
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1, // 向前两个loader，确保都加上前缀
      //         modules: {
      //           mode: 'local',
      //           localIdentName: '[name]__[local]__[hash:base64:5]'
      //         }
      //       }
      //     },
      //     'postcss-loader'
      //   ]
      // }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // all options are optional
    //   filename: 'statics/css/[name].[contentHash:6].css?v=[contentHash:6]',
    //   chunkFilename: '[id].css?v=[contentHash:6]',
    //   ignoreOrder: false // Enable to remove warnings about conflicting order
    // })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
