const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.tsx"
  },
  plugins: [new CleanWebpackPlugin(["dist/*.*"])],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have sourcemaps re-processed by 'source-map-loader'
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
