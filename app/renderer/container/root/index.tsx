/*
 * @Author: HasebeAya
 * @Date: 2021-07-16 09:19:10
 * @Description: 首页
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-16 14:06:02
 */

import React from 'react'

import Logo from './images/logo.png'

import './less/index.less'

function Root () {

  const data = {

    linkList: ['介绍', '简历', '源码']

  }

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="logo" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {data.linkList.map((text, index) => {
            return (
              <div key={index} styleName="item">{text}</div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="text">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Root
