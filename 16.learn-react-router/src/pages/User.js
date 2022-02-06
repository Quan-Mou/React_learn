import React, { PureComponent } from 'react';
import Profile from './Profile';
import { Redirect } from "react-router-dom"
export default class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // 有时间把这的状态交给redux来管理，练习一下redux
      isLogin: false
    }
  }
  render() {
    return (
      this.state.isLogin ? (<div><h2>用户名：权某人</h2></div>) : <Redirect to="/login" />
    );

  }
}
