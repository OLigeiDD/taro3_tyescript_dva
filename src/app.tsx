import React, { Component } from 'react'
import { cloud } from '@tarojs/taro'
import { Provider } from 'react-redux'
import store from '@/store'

import './app.scss'

class App extends Component {
  // globalData = {
  //   userInfo: {
  //     name: "ydd",
  //   },
  // };
  componentDidMount() {
    cloud.init({
      env: 'taro-0gu8oyxk5848cdec',
      traceUser: true,
    })
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
