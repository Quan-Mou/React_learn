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
        <h2 onClick={() => this.Click()}>{message}</h2>
      </div>
    )
  }
  componentDidUpdate() {
    console.log(this.state.message);
  }
  Click() {
    // this.setState({
    //   message: "你好！"
    // })
    // console.log(this.state.message); // 此时改变了message，打印的还是原来的值，因为setState是异步执行的

    // this.setState({
    //   message: "blog-qh.com"
    // }, () => {
    //   console.log(this.state.message);
    // })


    this.setState({
      message: "你好！"
    })

  }
}
