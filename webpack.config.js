const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'built.js'
  },
  module: {
    rules:[]
  },
  plugins:[
    new HtmlWebpackPlugin()
  ],
  mode: 'development',
  devServer: {
    // 项目构建后的路径
    contentBase: resolve(__dirname, 'bulid'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    open: true
  }
}