const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: "last 2 chrome versions"
                }
              }
            ],
            "@babel/preset-react"
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
};
