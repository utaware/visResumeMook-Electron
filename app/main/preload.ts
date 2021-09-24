/*
 * @Author: HasebeAya
 * @Date: 2021-07-09 10:32:25
 * @Description: config for creat main window
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-08-23 17:17:19
 */

import EventEmitter from "events"

const { contextBridge, ipcRenderer } = require('electron')

const validChannels = ['remote']

function checkIsValid (channel: string): boolean {
  return validChannels.includes(channel)
}

contextBridge.exposeInMainWorld('api', {
  send: (channel: string, data: any) => {
    if (checkIsValid(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  receive (channel: string, func: (...args: Array<any>) => void) {
    if (checkIsValid(channel)) {
      ipcRenderer.on(channel, (event: EventEmitter, ...args: Array<any>) => {
        func(...args)
      })
    }
  }
})
