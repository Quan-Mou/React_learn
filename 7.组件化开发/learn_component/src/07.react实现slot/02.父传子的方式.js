import React, { Component } from 'react'
import "./App.css"
function TabContainer(props) {
  console.log(props);
  const { leftSlot, centerSlot, rightSlot } = props;
  return (
    <div className="Container">
      <div className="leftSlot">{leftSlot}</div>
      <div className="centerSlot">{centerSlot}</div>
      <div className="rightSlot">{rightSlot}</div>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <TabContainer
          leftSlot={<span>左边的插槽</span>}
          centerSlot={<span>中间的插槽</span>}
          rightSlot={<span><a href="blog-qh.com">中间的插槽</a></span>} />
      </div>
    )
  }
}
