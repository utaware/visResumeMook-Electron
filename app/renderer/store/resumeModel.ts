/*
 * @Author: HasebeAya
 * @Date: 2021-07-19 14:44:03
 * @Description: 简历设计字段
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-20 14:58:34
 */

const Resume = {
  // 基本信息
  baseInfo: {
    // 个人信息
    avatar: '', // 头像
    username: '陈**', // 姓名
    gender: 'male', // 性别
    birthday: '1993-06-26', // 出生日期
    // 职业信息
    seniority: '5', // 工作年限
    hasEmployment: true, // 是否在职
    company: '**公司', // 公司
    profession: 'web前端开发', // 职位
    // 学历信息
    degree: '本科', // 学历
    college: '**大学', // 院校
    major: '**专业', // 专业
    isUnifiedRecruiment: true, // 是否统招
    // 社交信息
    phone: '18*********', // 电话
    email: '12*******@qq.com', // 邮件
    city: '深圳', // 地区
  },
  // 联系方式
  contact: {
    phone: '',
    email: '',
    github: '',
    juejin: '',
  },
  // 职业信息
  work: {
    job: '',
    city: '',
    cityList: [],
  },
  // 技能
  skill: '',
  skillList: [],
  evaluation: '',
  evaluationList: [],
  certificate: '',
  certificateList: [],
  // 教育经历
  schoolExperience: [],
  // 工作经历
  workExperience: [],
  // 项目经历
  projectExperience: []
}

const resumeModel = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: Resume
}

export default resumeModel
