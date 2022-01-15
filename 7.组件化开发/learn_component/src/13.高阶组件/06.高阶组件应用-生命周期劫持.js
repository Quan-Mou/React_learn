import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <h2>Home</h2>
    )
  }

  // 组件将要挂载时的生命周期函数
  UNSAFE_componentWillMount() {
    // console.log('Home 组件挂载');
    this.WillMoutTime = Date.now();

  }
  // 组件挂载完成生命周期函数
  componentDidMount() {
    // console.log("Home 组件挂载完成");
    this.DitMoutTime = Date.now();
    console.log(this.DitMoutTime - this.WillMoutTime);
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>About</h2>
    )
  }
  // 组件将要挂载时的生命周期函数
  UNSAFE_componentWillMount() {
    // console.log('Home 组件挂载');
    this.WillMoutTime = Date.now();

  }
  // 组件挂载完成生命周期函数
  componentDidMount() {
    // console.log("Home 组件挂载完成");
    this.DitMoutTime = Date.now();
    console.log(this.DitMoutTime - this.WillMoutTime);
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h3>App</h3>
        {/* 计算一个组件创建到挂载完毕的时间 */}
        <Home />
        <About />
      </div>
    )
  }
}
