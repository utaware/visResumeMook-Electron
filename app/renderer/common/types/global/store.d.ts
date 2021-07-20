/*
 * @Author: HasebeAya
 * @Date: 2021-07-17 10:25:07
 * @Description: store相关类型定义
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-20 14:51:39
 */

// rc 模块化定义
// 需参考实现定义详细描述
declare module 'rc-redux-model'
interface IGlobalModel {
  appName: string
}
interface IResumeModel {
  // 基本信息
  baseInfo: {
    // 个人信息
    avatar?: string; // 头像地址
    username: string; // 用户名
    gender: string; // 性别
    birthday: string; // 出生日期 => 年龄
    // 职业信息
    seniority: string; // 工作年限
    hasEmployment: boolean; // 是否在职
    company: string; // 公司
    profession: string; // 职位
    // 学历信息
    degree: string; // 学历
    college: string; // 院校
    major: string; // 专业
    isUnifiedRecruiment: boolean; // 是否统招
    // 其他信息
    phone: string; // 电话号码
    email: string; // 邮箱
    city: string; // 所在城市
  }
}

interface IReduxState {
  globalModel: IGlobalModel;
  resumeModel: IResumeModel;
}
