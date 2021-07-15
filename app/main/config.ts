/*
 * @Author: HasebeAya
 * @Date: 2021-07-09 10:32:25
 * @Description: config for creat main window
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-15 13:58:05
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
