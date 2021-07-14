/*
 * @Author: HasebeAya
 * @Date: 2021-07-14 14:29:48
 * @Description: 基础公共配置
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-14 14:52:18
 */

const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function resolve (args) {
  return path.resolve(__dirname, ...args)
}

module.exports = {
  // 配置模块如何被解析。
  resolve: {
    // 尝试按顺序解析这些后缀名。
    // 如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    alias: {
      '@src': resolve(['../', 'app/renderer'])
    },
  },
  // 这些选项决定了如何处理项目中的不同类型的模块
  module: {
    // 创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  // 用于以各种方式自定义 webpack 构建过程
  plugins: [
    new CleanWebpackPlugin()
  ]
}