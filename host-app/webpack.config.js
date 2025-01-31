const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        chat: "chat@http://localhost:3001/remoteEntry.js",
        email: "email@http://localhost:3002/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
