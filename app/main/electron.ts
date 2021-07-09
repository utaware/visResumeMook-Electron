/*
 * @Author: HasebeAya
 * @Date: 2021-07-09 10:25:44
 * @Description: main process entry
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-09 11:18:37
 */

const path = require('path')
// app 模块，它控制应用程序的事件生命周期。
// BrowserWindow 模块，它创建和管理应用程序 窗口。
const { app, BrowserWindow } = require('electron')

const config = require('./config.ts')

function createWindow () {

  const mainWindow = new BrowserWindow(config)

  mainWindow.loadFile('./index.html')

}

// 在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口。
// 可以通过使用 app.whenReady() API来监听此事件
app.whenReady().then(() => {

  createWindow()
  // 关闭所有窗口时退出应用 (Windows & Linux)
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  // 如果没有窗口打开则打开一个窗口(macOS)
  app.on('activate', function () {
    const hasWindow = BrowserWindow.getAllWindows().length === 0
    if (!hasWindow) {
      createWindow()
    }
  })

})
