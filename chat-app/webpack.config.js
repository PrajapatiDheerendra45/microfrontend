const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "chat",
      filename: "remoteEntry.js",
      exposes: {
        "./Chat": "./src/Chat",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
