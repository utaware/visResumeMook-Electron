/*
 * @Author: HasebeAya
 * @Date: 2021-07-14 15:30:27
 * @Description: 渲染进程主要的js
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-15 14:06:14
 */

import React from 'react'

import ReactDOM from 'react-dom'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Title from './title'

const rootSelector = '#root'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Title text="简介开发平台"></Title>
          <Title text="这是 Electron + React"></Title>
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App/>, document.querySelector(rootSelector))
