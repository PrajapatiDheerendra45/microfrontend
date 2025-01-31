const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  devServer: {
    port: 3002,
  },
  output: {
    publicPath: "http://localhost:3002/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "email",
      filename: "remoteEntry.js",
      exposes: {
        "./Email": "./src/Email",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
