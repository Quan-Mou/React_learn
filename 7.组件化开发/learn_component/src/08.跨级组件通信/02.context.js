import React, { Component } from 'react'

const UserInfo = React.createContext({
  nickName: '匿名',
  grade: -1
})

class ProFileHeader extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>您的昵称：{this.context.nickName}</h2>
        <h2>等级：{this.context.grade}</h2>
      </div>
    )
  }
}
ProFileHeader.contextType = UserInfo


class ProFile extends Component {

  render() {
    console.log(this.context);
    console.log(this.contextType);
    return (
      <div>
        <ProFileHeader />
      </div>
    )
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nickName: "权爷",
      grade: 100
    }
  }
  render() {
    return (
      <div>
        <UserInfo.Provider value={this.state}>
          <ProFile />
        </UserInfo.Provider>
        {/* <ProFile /> */}
        {/* 如果 ProFile 放在这里 UserInfo.Provider 组件所处的树中没有匹配到 Provider 时就会收到createContext的默认值*/}
      </div>
    )
  }
}


