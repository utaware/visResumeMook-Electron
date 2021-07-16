/*
 * @Author: HasebeAya
 * @Date: 2021-07-16 09:15:04
 * @Description: 路由文件
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-16 09:32:43
 */

import React from 'react'

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Root from './container/root'

function Router () {
  return (
    <HashRouter>
      <Switch>
        {/* 加上exact代表当前路由path的路径采用精确匹配 */}
        <Route path="/" exact>
          <Root></Root>
        </Route>
      </Switch>
      {/* 重定向到首页 */}
      <Redirect to="/"></Redirect>
    </HashRouter>
  )
}

export default Router