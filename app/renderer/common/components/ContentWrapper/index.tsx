/*
 * @Author: HasebeAya
 * @Date: 2021-07-20 15:48:34
 * @Description: resume 简历页内容包裹组件
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-20 17:47:01
 */

import React from 'react'

import './index.less'

import { PlusCircleOutlined } from '@ant-design/icons'

interface IPropTypes {
  contentSlot: React.Component;
  title: string;
  canEdit: boolean;
  canAdd: boolean;
}

function ResumeContentWrapper (props: IPropTypes) {
  const { contentSlot, title, canEdit, canAdd } = props
  return (
    <div styleName="wrapper">
      {/* 标题 */}
      <h3 styleName="title">
        { title }
        {/* 添加 */}
        { canAdd &&
          <span styleName="add">
            <PlusCircleOutlined style={{ marginRight: '5px' }} />添加
          </span>
        }
      </h3>
      <div styleName="content">
        { contentSlot }
      </div>
    </div>
  )
}

export default ResumeContentWrapper
