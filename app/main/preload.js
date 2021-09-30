/*
 * @Author: HasebeAya
 * @Date: 2021-07-09 10:32:25
 * @Description: config for creat main window
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-09-30 10:40:58
 */

const { contextBridge, shell } = require('electron')

const printPdf = require('./print')

contextBridge.exposeInMainWorld('electronAPI', {
  // 打开外部链接
  openExternal (url) {
    shell.openExternal(url)
  },

  // 打印Pdf
  printPdfWithPageUrl () {
    printPdf()
  }

})
