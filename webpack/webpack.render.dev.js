/*
 * @Author: HasebeAya
 * @Date: 2021-07-14 14:30:00
 * @Description: file description
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-09-24 11:21:43
 */

const path = require('path')

const webpackMerge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.js')

const ExecMainProcessPlugin = require('./plugin/exec')

function resolve (args) {
  return path.resolve(__dirname, args)
}

const devConfig = {
  mode: 'development',
  entry: {
    index: resolve('../app/renderer/app.tsx')
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve('../dist'),
  },
  // target: 'electron-renderer',
  target: 'web',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true, // 启用 gzip compression
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7001, // 启动端口为 7001 的服务
    hot: true
  },
  resolve: {
    alias: {
      '@src': resolve('../app/renderer'),
      '@common': resolve('../app/renderer/common')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../app/renderer/index.html'),
      filename: resolve('../dist/index.html'),
      chunks: ['index']
    }),
    new ExecMainProcessPlugin()
  ]
}

module.exports = webpackMerge.merge(baseConfig, devConfig)
