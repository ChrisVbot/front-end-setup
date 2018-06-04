const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const ManifestPlugin = require("webpack-manifest-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash].js"
  },
  //   devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    },
    // Create separate chunk for the runtime
    runtimeChunk: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "typings-for-css-modules-loader", // automatically add typings for CSS modules
            options: {
              modules: true,
              namedExport: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
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
      }
    ]
  },
  plugins: [
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
      //   chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    // new HtmlWebpackPlugin()
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
