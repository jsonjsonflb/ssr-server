const path = require("path");
const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");

const config = {
  mode: "development",
  target: "node", // 编译以在类似Node.js的环境中使用（使用Node.js需要加载块）
  watch: true,
  externals: [nodeExternals()],
  entry: "./src/server/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
    chunkFilename: "[name].[hash:6].js"
  }
};

module.exports = merge(baseConfig, config);
