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
    console.log('组件调用了render');
  }
  Click() {
    this.setState({})
  }
}
