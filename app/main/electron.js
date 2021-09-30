/*
 * @Author: HasebeAya
 * @Date: 2021-07-09 10:25:44
 * @Description: main process entry
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-09-30 11:10:59
 */

const path = require('path')

// app 模块，它控制应用程序的事件生命周期。
// BrowserWindow 模块，它创建和管理应用程序 窗口。
const { app, BrowserWindow } = require('electron')

const isDev = process.env.NODE_ENV === 'development'

const preloadPath = path.resolve(__dirname, 'preload.js')

const config = {
  width: 1200,
  height: 800,
  webPreferences: {
    // 是否开启 DevTools
    devTools: isDev,
    // 注入node模块
    nodeIntegration: false, // default-false
    // 是否在独立 JavaScript 环境中运行 Electron API和指定的preload脚本
    contextIsolation: true, // default-true
    // 是否启用 remote 模块
    enableRemoteModule: false, // default-false
    // 一个将被附加到当前应用程序的渲染器进程中process.argv的字符串列表 。
    // 可用于将少量的数据传递到渲染器进程预加载脚本中
    additionalArguments: [app.getPath('userData')], // String
    // 在页面运行其他脚本之前预先加载指定的脚本
    preload: preloadPath
  }
}

const loadURL = isDev ?
  'http://127.0.0.1:7001' :
  `file://${path.join(__dirname, '../dist/renderer/index.html')}`

function createWindow () {
  // https://www.electronjs.org/docs/api/browser-window
  const mainWindow = new BrowserWindow(config)

  mainWindow.loadURL(loadURL);

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
