import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }

  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>当前值{counter}</h2>
        <button onClick={() => { this.btnClick() }}>+1</button>
      </div>
    )
  }

  btnClick() {
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    this.setState((preState, prop) => {
      return { counter: preState.counter + 1 }
    })
    this.setState((preState, prop) => {
      return { counter: preState.counter + 1 }
    })
    this.setState((preState, prop) => {
      return { counter: preState.counter + 1 }
    })
  }
}
