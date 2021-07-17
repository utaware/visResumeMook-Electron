/*
 * @Author: HasebeAya
 * @Date: 2021-07-14 15:30:27
 * @Description: 渲染进程主要的js
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-17 11:22:17
 */

import React from 'react'

import ReactDOM from 'react-dom'
// router
import Router from './router'
// store
import store from './store'
// redux
import { Provider } from 'react-redux'
// css
import 'reset-css'
import 'normalize.css'

const rootSelector = '#root'

function App () {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

ReactDOM.render(<App/>, document.querySelector(rootSelector))
