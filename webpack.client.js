// 浏览器端代码打包
const path = require("path");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");

const configg = {
  mode: "development",
  watch: true,
  entry: path.join(__dirname, "src", "client/index"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js"
  }
};

module.exports = merge(baseConfig, configg);
