const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const devMode = process.env.NODE_ENV === "development" ? true : false;

module.exports = {
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "typings-for-css-modules-loader", // automatically add typings for CSS modules
            options: {
              modules: devMode ? false : true,
              namedExport: true,
              localIdentName: "[name]__[local]__[hash:base64:5]",
              camelCase: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () =>
                autoprefixer({
                  browsers: ["ie >= 10 "] // support for IE10 and above only
                })
            }
          },
          //   "css-loader",
          "sass-loader"
        ]
      },

      // All output '.js' files will have sourcemaps re-processed by 'source-map-loader'
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].min.css"
      // chunkFilename: "[id].[hash].css"
    }),
    new CleanWebpackPlugin(["dist/*.*"])
  ]
};
