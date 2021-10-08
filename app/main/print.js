/*
 * @Author: HasebeAya
 * @Date: 2021-08-23 14:50:50
 * @Description: 使用puppeteer打印出pdf文件
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-10-08 09:21:50
 */

const path = require('path')

const puppeteer = require('puppeteer')

const localPageUrl = 'http://127.0.0.1:7001/#/'

const downFileName = 'test.pdf'

const replacePath = 'node_modules\\puppeteer\\$&'

// process.env.PUPPETEER_EXECUTABLE_PATH
const executablePath = puppeteer.executablePath().replace(/(.local-chromium)/, replacePath)

module.exports = async function () {
  const browser = await puppeteer.launch({ executablePath })
  const page = await browser.newPage()
  await page.goto(localPageUrl, { timeout: 2000, waitUntil: 'domcontentloaded' })
  await page.pdf({
    path: path.resolve(__dirname, downFileName),
    format: 'A4',
    // 导出的 pdf 没有背景色和背景图
    printBackground: true
  })
  await browser.close()
  console.log('printPdf compelete')
}
