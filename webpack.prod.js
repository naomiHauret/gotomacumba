const path = require('path')
const merge = require('webpack-merge')
const glob = require('glob-all')
const HtmlPlugin = require('html-webpack-plugin')
const SocialTagsPlugin = require('social-tags-webpack-plugin')
const PurgeCssPlugin = require('purgecss-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebappPlugin = require('webapp-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const AsyncChunkNamesPlugin = require("webpack-async-chunk-names-plugin")
const CompressionPlugin = require('brotli-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const common = require('./webpack.common.js')

let plugins = [
  new HtmlPlugin({
    template: "./src/index.html",
    excludeChunks: ["base"],
    filename: "index.html",
    minify: {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
    },
  }),
  new AsyncChunkNamesPlugin(),
  new WebappPlugin({
    logo: "./src/assets/favicons/64x64.jpg",
    favicons: {
      appName: "Macumba Open Air Festival",
      appDescription: "",
      developerName: "Naomi Hauret",
      developerURL: "https://github.com/naomihauret",
      background: "white",
      theme_color: "magenta",
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        windows: false,
        yandex: false,
      },
    },
  }),
  new SocialTagsPlugin({
    appUrl: "https://gotomacumba.now.sh/",
    facebook: {
      "og:url": "https://gotomacumba.now.sh/",
      "og:type": "website",
      "og:title": "Macumba Open air Festival - Vous n'êtes pas prêts !",
      "og:description":
        "Viens faire la fête au Macumba! On est là pour ambiancer les festivals et concerts de metal! Dancefloor endiablé, boule disco, chenille sans fin, pluie de paillettes et chansons pop... Préparez-vous, vous n'êtes pas prêts !",
      "og:site_name": "Macumba Open air Festival",
      "og:locale": "fr_FR",
      "og:article:author": "Naomi Hauret",
      "og:image": path.resolve("src/assets/socials/facebook@1200x628.jpg"),
    },
    twitter: {
      "twitter:card": "Macumba Open air Festival - Vous n'êtes pas prêts !",
      "twitter:creator": "Naomi Hauret",
      "twitter:url": "https://gotomacumba.now.sh/",
      "twitter:title": "Macumba Open air Festival - Vous n'êtes pas prêts !",
      "twitter:description":
        "Viens faire la fête au Macumba! On est là pour ambiancer les festivals et concerts de metal! Dancefloor endiablé, boule disco, chenille sans fin, pluie de paillettes et chansons pop... Préparez-vous, vous n'êtes pas prêts !",
      "twitter:image": path.resolve("src/assets/socials/twitter@1024x512.png"),
    },
  }),
  new PurgeCssPlugin({
    paths: glob.sync([path.join(__dirname, "./src/**/*.html"), path.join(__dirname, "./src/**/*.js")]),
  }),
  new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, "dist"),
    indexPath: path.resolve("./dist/index.html"),
    routes: ["/", "/parties", "/team"],
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      keepClosingSlash: true,
      sortAttributes: true,
    },
  }),
  new CompressionPlugin({
    algorithm: "gzip",
    asset: "[path].gz[query]",
    test: /\.(html|js|css|svg|ttf|eot|otf|woff|ico)$/,
    minRatio: 0.8,
  }),
]
module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /node_modules/,
                    priority: 20
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'all',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    ecma: 8,
                    warnings: false,
                    compress: {
                        warnings: false,
                        conditionals: true,
                        unused: true,
                        comparisons: true,
                        sequences: true,
                        dead_code: true,
                        evaluate: true,
                        if_return: true,
                        join_vars: true,
                        drop_console: true,
                        drop_debugger: true,
                    },
                    output: {
                        comments: false,
                        beautify: false,
                    },
                    sourceMap: false,
                    pure_funcs: ['console.log'],
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false,
                },
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: { discardComments: { removeAll: true } },
            }),
        ],
    },
    plugins,
})
