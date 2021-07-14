/*
 * @Author: HasebeAya
 * @Date: 2021-07-14 14:30:00
 * @Description: file description
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-14 16:04:08
 */

const path = require('path')

const webpackMerge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.js')

function resolve (args) {
  return path.resolve(__dirname, args)
}

const devConfig = {
  context: resolve('../app'),
  mode: 'development',
  entry: {
    index: resolve('../app/renderer/app.jsx')
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve('../dist'),
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7001, // 启动端口为 7001 的服务
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../app/renderer/index.html'),
      filename: resolve('../dist/index.html'),
      chunks: ['index']
    })
  ]
}

module.exports = webpackMerge.merge(baseConfig, devConfig)
