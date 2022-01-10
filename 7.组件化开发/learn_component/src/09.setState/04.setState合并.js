import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello React"
    }

  }
  render() {

    const { message } = this.state;
    return (
      <div>
        <h2 onClick={() => this.Click()} id="btn" >{message}</h2>
      </div>
    )
  }


  Click() {
    // 如果this.state里有多个数据，此时setState修改了其中一个数据，是不会影响其他数据的。

    // 源码中其实是有对 原对象 和 新对象进行合并的：使用Object.assign()
  }
}
