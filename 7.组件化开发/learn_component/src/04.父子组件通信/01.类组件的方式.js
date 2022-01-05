import React, { Component } from 'react'

class ChildCpn extends Component {
  constructor(props) {
    super(props);
    // 父组件会把数据传到props这个对象中
    this.Info = this.props;
    console.log(this.props);
  }

  render() {
    console.log(this.Info);
    return (
      <div>
        <h2>我是ChildCpn子组件</h2>
        <h2>{"我的名字叫" + this.Info.name + ",今年" + this.Info.age + "岁,身高是：" + this.Info.width}</h2>
      </div>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="权爷" age="17" width="1.88" />
      </div>
    )
  }
}
