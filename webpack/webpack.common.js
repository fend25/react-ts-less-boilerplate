const webpack = require('webpack')
const convert = require('koa-connect')
const history = require('connect-history-api-fallback')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const {CheckerPlugin} = require('awesome-typescript-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths')

module.exports = (isProduction) => {
  return {
    entry: paths.entryPath,
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css|less)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                modules: {
                  localIdentName: '[local]',
                },
              },
            },
            'less-loader',
          ],
        },
      ],
    },
    serve: {
      add: app => {
        app.use(convert(history()))
      },
      content: paths.entryPath,
      dev: {
        publicPath: paths.outputPath,
      },
      open: true,
    },
    resolve: {
      alias: {src: paths.src},
      modules: ['src', 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.less'],
    },
    plugins: [
      new CheckerPlugin(),
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: paths.templatePath,
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async',
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        DEBUG: false,
        isDebug: typeof process.env.DEBUG !== 'undefined',
        isProd: isProduction,
        isDev: !isProduction
      })
    ],
  }
}