const HtmlPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

let plugins = [
    new HtmlPlugin({
        template: './src/index.html',
        filename: 'index.html',
    }),
]

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins,
})
