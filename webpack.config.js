const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

const port = process.env.PORT || 8080;

module.exports = {
  mode: "development",
  entry: {
    vendor: ["semantic-ui-react", "materialize-css"],
    app: "./src/index.js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  output: {
    path: `${__dirname}/dist`,
    // production시 publicPath 바뀌어야할 수 있음
    publicPath: "/",
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              localsConvention: "camelCase",
              modules: true,
            },
          },
        ],
      },
      //scss를 사용하지 않는다면 삭제한다.
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                // localIdentName: '[local]'
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [`${__dirname}/src/scss`],
              data: `@import 'variables';`,
            },
          },
        ],
      },
      {
        test: /\.(svg|jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new DefinePlugin({
      FetchUrl: JSON.stringify(
        "https://ec2-3-34-52-171.ap-northeast-2.compute.amazonaws.com"
      ),
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
};