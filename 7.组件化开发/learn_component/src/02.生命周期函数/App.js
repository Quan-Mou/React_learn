import React, { Component } from 'react'
export default class App extends Component {
  constructor() {
    super();
    console.log('constructor方法执行');
  }

  render() {
    console.log('render方法执行');
    return (
      <div>
        <h2>生命周期函数执行</h2>
      </div>
    )
  }
  componentDidMount() {
    console.log("componentDidMount函数执行");
  }
}

