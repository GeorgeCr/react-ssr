const path = require("path");

module.exports = {
  entry: path.resolve("src/client/index.js"),
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve("public"),
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
    ],
  },
};
