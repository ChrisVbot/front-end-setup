const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-cheap-source-map",
  devServer: {
    contentBase: "./"
  },
  module: {
    // rules: [
    //   {
    //     test: /\.s?[ac]ss$/,
    //     use: [
    //       "style-loader",
    //       {
    //         loader: "typings-for-css-modules-loader", // automatically add typings for CSS modules
    //         options: {
    //           modules: true,
    //           namedExport: true,
    //           localIdentName: "[name]__[local]__[hash:base64:5]"
    //         }
    //       },
    //       "sass-loader"
    //     ]
    //   }
    // ]
  }
});
