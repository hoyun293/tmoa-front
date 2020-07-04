const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
      },
    },
  },
  output: {
    path: path.resolve('./build'),
    // production시 publicPath 바뀌어야할 수 있음
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  // 프로덕션 소스맵
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // css가 추출되지 않으면 원래 그대로 style loader가 실행되어 css를 insert한다.
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                localsConvention: 'camelCase',
                modules: false,
              },
            },
            {
              // css-loader 전에 postCSS가 실행되어 압축하고 CSS룰을 적용한다.
              // 자동 전처리(AUTO prefixer)를 실행한다.
              // 자동 전처리 단계에서 최신 브라우저 2 사양을 사용한다.
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions',
                    },
                  },
                },
              },
            },
          ],
        }),
      },
      {
        // scss사용안하면 삭제한다.
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                // localIdentName: "[local]",
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [`${__dirname}/src/scss`],
              data: `@import 'variables';`,
            },
          },
        ],
      },
      {
        test: /\.(svg|jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./public/index.html'),
      favicon: './public/favicon.ico',
    }),
    new DefinePlugin({
      FetchUrl: JSON.stringify('https://ec2-3-34-52-171.ap-northeast-2.compute.amazonaws.com'),
    }),
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true,
    }),
  ],
};
