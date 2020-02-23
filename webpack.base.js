const path = require('path');

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
        exclude: [path.resolve(__dirname, 'node_modules')],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['ts', 'tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
