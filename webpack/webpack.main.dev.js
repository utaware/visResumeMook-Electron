/*
 * @Author: HasebeAya
 * @Date: 2021-07-14 14:29:54
 * @Description: 主进程的配置
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-09-30 11:46:06
 */

const path = require('path')

const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
// 目录解析均相对当前文件目录
function resolve (args) {
  return path.resolve(__dirname, args)
}
// 打包目录
const distDirPath = resolve('../dist/main')

const mainConfig = {
  entry: {
    electron: resolve('../app/main/electron.js'),
    preload: resolve('../app/main/preload.js')
  },
  // 构建目标
  target: 'electron-main',
  output: {
    path: distDirPath
  },
  // 配置是否 polyfill 或 mock 某些 Node.js 全局变量。
  node: {
    global: false,
    __filename: false,
    __dirname: false
  },
  resolve: {}
}

module.exports = webpackMerge.merge(baseConfig, mainConfig)