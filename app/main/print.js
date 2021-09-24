/*
 * @Author: HasebeAya
 * @Date: 2021-08-23 14:50:50
 * @Description: 使用puppeteer打印出pdf文件
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-09-24 14:21:35
 */
const puppeteer = require('puppeteer')

const localPageUrl = 'http://127.0.0.1:7001/#/'
// const localPageUrl = 'https://juejin.cn/user/1327865775784216/books?type=bought'

const downloadPath = './download'

const downFileName = 'test.pdf'

console.log('localPageUrl', localPageUrl)

const printPdf = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(localPageUrl, { timeout: 2000, waitUntil: 'domcontentloaded' })
  await page.pdf({
    path: `${downloadPath}/${downFileName}`,
    format: 'A4',
    // 导出的 pdf 没有背景色和背景图
    printBackground: true
  })
  await browser.close()
  console.log('printPdf compelete')
}

printPdf()
