/*
 * @Author: HasebeAya
 * @Date: 2021-07-16 09:19:10
 * @Description: 首页
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-17 15:47:43
 */

import React from 'react'

import { useHistory } from 'react-router'

import { shell } from 'electron'

import { useSelector } from 'react-redux'

import Logo from './images/logo.png'

import { ROUTER_ENTRY } from '@common/constants/router'
import { isBrowserUrl } from '@common/utils/router'

import './less/index.less'

function Root () {

  const history = useHistory()

  const onOpenBrowserHref = ({ url }: TSRouter.Item) => {
    shell.openExternal(url)
  }

  const onRouterToLink = ({ url }: TSRouter.Item) => {
    history.push(url)
  }

  const onOpenTargetUrl = (item: TSRouter.Item) => {
    isBrowserUrl(item.url) ? onOpenBrowserHref(item) : onRouterToLink(item)
  }

  const { appName } = useSelector((state: IReduxState) => state.globalModel)

  console.log('appName', appName)

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="logo" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        {/* 链接跳转 */}
        <div styleName="action">
          {ROUTER_ENTRY.map((item: TSRouter.Item) => {
            return (
              <div styleName="item"
                key={item.key}
                onClick={ () => onOpenTargetUrl(item) }>
                  {item.text}
              </div>
            )
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="text">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By utaware
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Root
