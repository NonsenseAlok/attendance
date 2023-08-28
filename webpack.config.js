const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "main.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    static: __dirname, // Serve files from the current directory
  },
};
