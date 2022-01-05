import React, { Component, createRef } from 'react'

class BtnIncrment extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrment}>+1</button>
      </div>
    )
  }
}


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
        <h2>当前计数：{counter}</h2>
        <button onClick={this.btnClick} >+1</button>
        <BtnIncrment incrment={this.btnClick} />
      </div>
    )
  }
  btnClick = () => {
    {
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }
}
