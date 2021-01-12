import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { getApp, getSetting, getUserInfo } from '@tarojs/taro'
import './index.scss'

const app = getApp()

export default class User extends Component {
  title = 'user'

  userInfo = app.globalData.userInfo

  onLoad() {
    console.log(app)
    this.checkAuthSetting()
  }

  checkAuthSetting() {
    getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          getUserInfo({
            success: info => {
              console.log(info)
            },
          })
        }
      },
    })
  }

  setUserTemp(userinfo = null, isAuthorized = true, cb) {
    this.setState({})
  }

  render() {
    return (
      <View className="user">
        <Text>Hello world!</Text>
      </View>
    )
  }
}
