/*
 * @Author: HasebeAya
 * @Date: 2021-07-16 09:15:04
 * @Description: 路由文件
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-17 11:21:36
 */

import React from 'react'
// router
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// components
import Root from '@src/container/root'
import Resume from '@src/container/resume'
// route
import { ROUTER } from '@common/constants/router'

function Router () {
  return (
    <HashRouter>
      <Switch>
        {/* 加上exact代表当前路由path的路径采用精确匹配 */}
        <Route path={ROUTER.root} exact>
          <Root></Root>
        </Route>
        {/* 简历 */}
        <Route path={ROUTER.resume}>
          <Resume></Resume>
        </Route>
      </Switch>
      {/* 重定向到首页 */}
      <Redirect to={ROUTER.root}></Redirect>
    </HashRouter>
  )
}

export default Router
