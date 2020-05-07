const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'eval-source-map',
  devtool: false,
  module: {
    rules: [
      // 如果不用分割css 文件， 则不用给css文件加路径
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
            // 这里待定
            // options: {
            //   publicPath: '../'
            // }
          },
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    overlay: true
  }
})
