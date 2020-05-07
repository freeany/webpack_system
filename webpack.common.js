const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
  entry: {
    app: './src/index.js',
    hello: './src/hello.js'
  },
  // 配置出口
  output: {
    filename: 'js/[name].[hash]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // ['@babel/preset-env', { debug: true, useBuiltIns: 'usage' }],
              [
                // ['@babel/preset-env', { debug: true }],
                '@babel/preset-react'
              ]
            ],
            // plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
            // 这里的plugins是 loader的plugins插件。而不是webpack的plugins
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  absoluteRuntime: false,
                  corejs: 2,
                  helpers: true,
                  regenerator: true,
                  useESModules: false
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // 改成正确的名字
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '嘿嘿嘿',
      filename: 'index.html',
      template: 'src/public/index.html',
      hash: true,
      minify: { collapseWhitespace: true }
    }),
    new CleanWebpackPlugin({ dry: true }),
    new WebpackBar()
  ]
}
