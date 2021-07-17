/*
 * @Author: HasebeAya
 * @Date: 2021-07-17 16:08:55
 * @Description: webpack 热加载完成后启动主进程
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-17 17:58:08
 */
const { exec } = require('child_process')

const pluginName = 'CompileEndPlugin'

const EventEmitter = require('events')

const customerEvent = new EventEmitter()

customerEvent.once('webpack', () =>{
  exec('npm run start:main')
})

class CompileEndPlugin {

  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    compiler.hooks.afterEmit.tapPromise(pluginName, (compilation) => {
      return new Promise((resolve, reject) => {
        resolve()
      }).then(() => {
        customerEvent.emit('webpack')
      })
    })
  }

}

module.exports = CompileEndPlugin
