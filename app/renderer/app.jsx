/*
 * @Author: HasebeAya
 * @Date: 2021-07-14 15:30:27
 * @Description: 渲染进程主要的js
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-14 15:34:54
 */

import React from 'react'

import ReactDOM from 'react-dom'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const rootSelector = '#root'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>可视化简历平台</div>
          <div>这是 Electron + React</div>
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App/>, document.querySelector(rootSelector))
