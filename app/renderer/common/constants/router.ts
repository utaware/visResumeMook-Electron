/*
 * @Author: HasebeAya
 * @Date: 2021-07-16 16:22:38
 * @Description: 路由维护文件
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-16 16:33:58
 */

export const ROUTER = {
  root: '/',
  resume: '/resume'
}

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume'
}

export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://github.com/PDKSophia/visResumeMook',
    key: 'intorduce',
    text: '介绍'
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历'
  },
  {
    url: 'https://github.com/utaware/visResumeMook-Electron',
    key: 'code',
    text: '源码'
  }
]
