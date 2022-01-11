import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      currentText: "Hello !"
    }
  }
  render() {
    console.log("App调用了render");
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increnment()}>+1</button>
        <button onClick={e => this.btnClick()}>点击更改文件</button>
      </div>
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 这里的this.state.counter是之前的值
    if (this.state.counter != nextState.counter) {
      return true;
    }

    return false;
  }
  increnment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  btnClick() {
    this.setState({
      currentText: "你好锕"
    })
  }
}
