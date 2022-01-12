import React, { Component, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      friendList: [
        { name: "curry", age: 33 },
        { name: "kebi", age: 43 },
        { name: "James", age: 37 }
      ]
    }

  }
  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {
            this.state.friendList.map((item, index) => {
              return (
                <li key={item.name}>
                  姓名：{item.name}
                  年龄：{item.age}
                  <button onClick={e => this.addAge(index)}>age+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.AddFriend()}>添加数据</button>
      </div>
    )
  }
  AddFriend() {
    // 不推荐
    // this.state.friendList.push({ name: "雷霆嘎巴", age: 20 })
    // this.setState({
    //   friendList: this.state.friendList
    // })

    // 推荐
    const newFriend = [...this.state.friendList, { name: "雷霆嘎巴", age: 20 }];
    this.setState({
      friendList: newFriend
    })
    // 为什么说state的不可变性，因为state里面的数据，没一个数据需要开辟一块空间，如果是引用数据类型，你在原来的数据里面添加东西
    // 只是添加了数据，原来的空间并没有改变，这时候进行浅比较时是相同的，
  }
  addAge(index) {
    const newAge = [...this.state.friendList];
    newAge[index].age += 1;
    this.setState({
      friendList: newAge
    })
  }
}
