import React, { Component } from 'react'
import "./App.css"
function TabContainer(props) {
  console.log(props);
  return (
    <div className="Container">
      <div className="leftSlot">{props.children[0]}</div>
      <div className="centerSlot">{props.children[1]}</div>
      <div className="rightSlot">{props.children[2]}</div>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <TabContainer>
          <span>左边</span>
          <span>中间</span>
          <span>右边</span>
        </TabContainer>
      </div>
    )
  }
}
