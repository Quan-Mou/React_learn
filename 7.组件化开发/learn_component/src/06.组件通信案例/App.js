import React, { Component } from 'react'
import "./index.css"
import TabContainer from "./TabContainer"
export default class App extends Component {
  constructor() {
    super();
    this.titles = ["流行", "新款", "精选"]
    this.state = {
      currentTitle: 0
    }
  }
  render() {
    const { currentTitle } = this.state
    return (
      <div>
        <TabContainer
          titles={this.titles}
          getIndex={index => this.getIndex(index)} />
        <h2>{this.titles[currentTitle]}</h2>
      </div>
    )
  }
  getIndex(index) {
    this.setState({
      currentTitle: index
    })
  }
}
