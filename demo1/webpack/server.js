const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve("src/server/index.js"),
  target: "node",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve("dist"),
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
    ],
  },
  externals: [new nodeExternals()],
};
