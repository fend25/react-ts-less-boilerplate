const webpack = require('webpack')

const paths = require('./paths')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chunkFilename: '[name].js',
  },
  resolve: {
    alias: {'react-dom': '@hot-loader/react-dom'}
  },
  devServer: {
    contentBase: paths.assetsPath,
    compress: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
