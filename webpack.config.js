const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack/webpack.common')

const isProduction = process.env.NODE_ENV === 'production'

const envConfig = require(`./webpack/webpack.${isProduction ? 'prod' : 'dev'}.js`)
module.exports = webpackMerge(commonConfig(isProduction), envConfig)
