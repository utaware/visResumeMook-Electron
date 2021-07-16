/*
 * @Author: HasebeAya
 * @Date: 2021-07-16 16:54:34
 * @Description: 路由相关的工具处理函数
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-16 17:01:40
 */


export function isBrowserUrl (url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/
  return regRule.test(url.toLowerCase())
}
