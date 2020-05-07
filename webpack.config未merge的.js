const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  // 设置模式
  mode: 'production',
  devtool: false,
  // 普通配置入口
  // entry: './src/index.js',
  // 配置多入口文件
  entry: {
    app: './src/index.js',
    hello: './src/hello.js'
  },
  // 配置出口
  output: {
    // filename: 'js/[name]-[hash].bundle.js',
    filename: 'js/[name].bundle.js',
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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        // 从右向左解析
        use: [
          // Creates `style` nodes from JS strings
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          'less-loader' // compiles Less to CSS
        ]
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
  // 与entry、output同级的才是webpack的plugins。
  plugins: [
    new HtmlWebpackPlugin({
      title: '嘿嘿嘿',
      filename: 'index.html',
      template: 'src/public/index.html',
      hash: true,
      // //删除空格、换行 压缩了html
      minify: { collapseWhitespace: true }
    }),
    // 将css进行分离为  .css文件
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output  类似于webpackOptions.output
      // both options are optional 这两个参数都是可选的
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css'
    }),
    new CleanWebpackPlugin({ dry: true })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // gzip 压缩
    compress: true,
    port: 9000,
    open: true
  }
}
