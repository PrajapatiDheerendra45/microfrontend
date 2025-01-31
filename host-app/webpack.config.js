const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "http://localhost:3000/",
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
  ],
};
