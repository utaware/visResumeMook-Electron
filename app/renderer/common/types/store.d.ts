/*
 * @Author: HasebeAya
 * @Date: 2021-07-17 10:25:07
 * @Description: store相关类型定义
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-17 15:43:52
 */

// rc 模块化定义
// 需参考实现定义详细描述
declare module 'rc-redux-model'

interface IGlobalModel {
  appName: string
}

interface IReduxState {
  globalModel: IGlobalModel
}
