/*
 * @Author: HasebeAya
 * @Date: 2021-07-19 16:09:40
 * @Description: 编辑信息预览
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-20 14:59:13
 */

import React from 'react'

import './index.less'

import { useSelector } from 'react-redux'

import {
  FormOutlined,
  ManOutlined,
  WomanOutlined,
  HomeOutlined,
  MailOutlined,
  TabletOutlined
} from '@ant-design/icons'

import { computedAgeWithBirthday } from '@common/utils/times'

const { baseInfo } = useSelector((state: IReduxState) => state.resumeModel)

function ResumeBaseInfoPreview () {

  const {
    username,
    gender,
    birthday,
    hasEmployment,
    seniority,
    company,
    profession,
    degree,
    college,
    major,
    isUnifiedRecruiment,
    phone,
    email,
    city
  } = baseInfo

  const isMale = gender === 'male'

  const age = computedAgeWithBirthday(birthday)

  const avatarUrl = require('@assets/images/avatar.jpg')

  return (
    // 包裹
    <div styleName="wrapper">
      {/* 容器 */}
      <div styleName="container">
        {/* 头像 */}
        <div styleName="avatar">
          <img styleName="img" src={avatarUrl} alt="avatar" />
        </div>
        {/* 内容 */}
        <div styleName="content">
          {/* 姓名 - 性别 */}
          <h3 styleName="username">
            { username }
            <i styleName={`icon ${gender}`}>
              { isMale ? <ManOutlined/> : <WomanOutlined/> }
            </i>
          </h3>
          {/* 职业信息 */}
          <ul styleName="list gray">
            <li styleName="item">{ seniority }年</li>
            <li styleName="item">{ hasEmployment ? company + '(在职)' : '找工作中' }</li>
            <li styleName="item">{ profession }</li>
          </ul>
          {/* 学历信息 */}
          <ul styleName="list gray">
            <li styleName="item">{ degree }{ isUnifiedRecruiment && '(统招)' }</li>
            <li styleName="item">{ college }({ major })</li>
            <li styleName="item">{ age }岁</li>
          </ul>
          {/* 社交信息 */}
          <ul styleName="list gray">
            <li styleName="item">
              <TabletOutlined style={{ marginRight: '5px' }} />{ phone }
            </li>
            <li styleName="item">
              <MailOutlined style={{ marginRight: '5px' }} />{ email }
            </li>
            <li styleName="item">
              <HomeOutlined style={{ marginRight: '5px' }} />{ city }
            </li>
          </ul>
        </div>
        {/* 操作按钮 */}
        <div styleName="handle">
          <FormOutlined />  编辑
        </div>
      </div>
    </div>
  )
}

export default ResumeBaseInfoPreview