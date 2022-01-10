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

  componentDidMount() {
    const btnClick = document.getElementById("btn");
    btnClick.addEventListener("click", () => {
      this.setState({
        message: "哈哈哈"
      })
      console.log(this.state.message);
    })
  }

  Click() {
    setTimeout(() => {
      this.setState({
        message: "你好！"
      })
      console.log(this.state.message);
    }, 0)
  }
}
