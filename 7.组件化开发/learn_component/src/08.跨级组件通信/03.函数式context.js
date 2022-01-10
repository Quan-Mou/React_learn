import React, { Component } from 'react'

const UserInfo = React.createContext({
  nickName: '匿名',
  grade: -1
})

// 如果有多个context
const Theme = React.createContext({
  color: "green"
})

function ProFileHeader() {
  return (
    // <div>
    //   <h2>您的昵称：</h2>
    //   <h2>等级：</h2>
    // </div>

    <UserInfo.Consumer>
      {
        value => {
          return (
            <Theme.Consumer>
              {
                Theme => {
                  return (
                    <div>
                      <h2 style={{ color: Theme.color }}>您的昵称：{value.nickName}</h2>
                      <h2> 等级：{value.grade}</h2>
                      <h2> 颜色：{Theme.color}</h2>
                    </div>
                  )
                }
              }
            </Theme.Consumer>
          )
        }
      }
    </UserInfo.Consumer>
  )

}


function ProFile() {
  return (
    <div>
      <ProFileHeader />
    </div>
  )
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nickName: "权爷",
      grade: 100,

    }
  }
  render() {
    return (
      <div>
        <UserInfo.Provider value={this.state}>
          <Theme.Provider value={{ color: "red" }}>f
            <ProFile />
          </Theme.Provider>
        </UserInfo.Provider>
      </div>
    )
  }
}