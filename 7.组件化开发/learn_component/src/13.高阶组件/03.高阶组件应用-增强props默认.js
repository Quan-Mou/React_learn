import React, { PureComponent, createContext } from 'react'


function Home() {
  return (
    <UserInfo.Consumer>
      {
        props => {
          return (<div><h2>Home：{`昵称：${props.nickName},等级：${props.level},地区：${props.Region}`}</h2></div>)
        }
      }
    </UserInfo.Consumer>
  )
}

function About() {
  return (
    <UserInfo.Consumer>
      {
        props => {
          console.log(props);
          return (<div><h2>About：{`昵称：${props.nickName},等级：${props.level},地区：${props.Region}`}</h2></div>)
        }
      }
    </UserInfo.Consumer>
  )
}

const UserInfo = createContext({
  nickName: '默认名字',
  level: "默认等级",
  地区: "默认地区"
});

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserInfo.Provider value={{ nickName: "斯蒂芬库里", level: 99, Region: "中国" }}>
          <Home />
          <About />
        </UserInfo.Provider>
      </div>
    )
  }
}
