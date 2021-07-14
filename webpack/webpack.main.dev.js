/*
 * @Author: HasebeAya
 * @Date: 2021-07-14 14:29:54
 * @Description: 主进程的配置
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-14 15:57:23
 */

const path = require('path')

const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
// 目录解析均相对当前文件目录
function resolve (args) {
  return path.resolve(__dirname, args)
}
// 基础路径
const baseDirPath = resolve('../app')
// 打包目录
const distDirPath = resolve('../dist')
// 主进程入口目录
const entryDirPath = resolve('../app/main/electron.js')

const mainConfig = {
  // 基础目录，绝对路径，用于从配置中解析入口点(entry point)和 加载器(loader)。
  context: baseDirPath,
  entry: entryDirPath,
  // 构建目标
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: distDirPath,
  },
  // 此选项控制是否生成，以及如何生成 source map。
  devtool: 'inline-source-map',
  // 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化
  mode: 'development',
}

module.exports = webpackMerge.merge(baseConfig, mainConfig)