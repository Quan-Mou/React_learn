import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      color: "pink"
    }
  }
  render() {
    return (
      <div>
        <h2 style={{ fontSize: "30px", color: "red" }}>铠甲勇士-帝皇铠甲</h2>
        <ul>
          <li style={{ color: "green" }}>召唤</li>
          <li style={{ color: "yellow" }}>铠甲</li>
          <li style={{ color: this.state.color }}>勇士</li>
        </ul>
      </div>
    )
  }
}
