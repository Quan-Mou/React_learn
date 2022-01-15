import React, { PureComponent, createContext } from 'react'


const UserInfo = createContext({
  nickName: "默认名",
  level: "默认等级",
  Region: "默认地区"
})


function Home(props) {
  console.log(props);
  return (
    <div><h2>Home：{`昵称：${props.nickName},等级：${props.level},地区：${props.Region}`}</h2></div>
  )
}

function About(props) {
  return (
    <div><h2>About：Home：{`昵称：${props.nickName},等级：${props.level},地区：${props.Region}`}</h2></div>
  )
}


// 定义高阶组件
function enhanceRegion(WrappedComponent) {

  return props => {
    return (
      <UserInfo.Consumer>
        {
          data => {
            return <WrappedComponent {...data} />
          }
        }
      </UserInfo.Consumer>
    )
  }
}

const EnhanceHome = enhanceRegion(Home);
const EnhanceAbout = enhanceRegion(About);

EnhanceHome()
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserInfo.Provider value={{ nickName: "斯蒂芬库里", level: 99, Region: "中国" }}>
          <EnhanceHome />
          <EnhanceAbout />
        </UserInfo.Provider>
      </div>
    )
  }
}
