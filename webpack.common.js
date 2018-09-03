const path = require("path")
const webpack = require("webpack")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")
const exludedFolders = [path.join(__dirname, "node_modules")]

let plugins = [
    new Dotenv(),
    new CopyPlugin([
        { from: "./src/assets/fonts", to: "./assets/fonts" },
        { from: "src/assets/socials", to: "./" },
    ]),
    new MiniCssExtractPlugin({
        filename: "assets/stylesheets/[name].[hash].css",
    }),
    new webpack.IgnorePlugin(/caniuse-lite\/data\/regions/),
]

module.exports = {
    entry: {
        vendors: ['react', 'react-dom', 'react-router', 'react-router-dom', 'react-loadable', 'lodash', 'recompose'],
        client: './src/index.js',
    },
    output: {
        filename: 'assets/scripts/[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./src/app'), path.resolve('./node_modules')],
    },
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: exludedFolders,
                use: 'babel-loader',
            },
            // CSS
            {
                test: /src(\/|\\).*\.css$/,
                exclude: exludedFolders,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: false,
                        },
                    },
                    'postcss-loader',
                ],
            },
            // SVG
            {
                test: /images(\/|\\).*\.svg$/,
                exclude: exludedFolders,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]',
                        },
                    },
                ],
            },
            // Images
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]',
                        },
                    },
                ],
            },
            // Video
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/video/[name].[ext]',
                        },
                    },
                ],
            },
            // Music
            {
                test: /\.(mp3|wav|ogg|flac)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/music/[name].[ext]',
                        },
                    },
                ],
            },
            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: './../fonts/',
                            outputPath: 'assets/fonts/',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins,
}