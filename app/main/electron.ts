/*
 * @Author: HasebeAya
 * @Date: 2021-07-09 10:25:44
 * @Description: main process entry
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-19 10:41:38
 */

import path from 'path'
// app 模块，它控制应用程序的事件生命周期。
// BrowserWindow 模块，它创建和管理应用程序 窗口。
import { app, BrowserWindow } from 'electron'

import config from './config'

function isDev () : boolean {
  return process.env.NODE_ENV === 'development'
}

function createWindow () {

  const mainWindow = new BrowserWindow(config)

  if (isDev()) {
    // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }

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
