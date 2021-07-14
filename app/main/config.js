/*
 * @Author: HasebeAya
 * @Date: 2021-07-09 10:32:25
 * @Description: config for creat main window
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-14 16:14:48
 */

const WindowWidth = 1200
const WindowHeight = 800

module.exports = {
  width: WindowWidth,
  height: WindowHeight,
  webPreferences: {
    nodeIntegration: true, // 注入node模块
    contextIsolation: false
  }
}