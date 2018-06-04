const ManifestPlugin = require("webpack-manifest-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// CSS optimization
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const autoprefixer = require("autoprefixer");

const devMode = process.env.ENV || false;

module.exports = {
  mode: devMode ? "development" : "production",
  // Enables smart code splitting
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
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: {
    main: "./src/index.tsx"
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: __dirname + "/dist"
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
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
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
                  browsers: ["last 3 versions", "> 1%"]
                })
            }
          },
          //   "css-loader",
          "sass-loader"
        ]
      }
      //   {
      //     test: /\.scss$/,
      //     use: [
      //       MiniCssExtractPlugin.loader, // extracts CSS into separate file
      //       //   "style-loader", // create style nodes from JS strings
      //       "css-loader", // translates CSS into CommonJS
      //       "sass-loader" // compiles Sass to CSS
      //     ]
      //   }
    ]
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(["dist/*.*"]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "[name].css" : "[name].[hash].css"
      //   chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
    // new HtmlWebpackPlugin()
  ]
};
