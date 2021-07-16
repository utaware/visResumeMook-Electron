/*
 * @Author: HasebeAya
 * @Date: 2021-07-14 15:30:27
 * @Description: 渲染进程主要的js
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-16 17:48:47
 */

import React from 'react'

import ReactDOM from 'react-dom'
// router
import Router from './router'
// css
import 'reset-css'
import 'normalize.css'

const rootSelector = '#root'

function App () {
  return (
    <Router></Router>
  )
}

ReactDOM.render(<App/>, document.querySelector(rootSelector))
