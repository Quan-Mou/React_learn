import React, { PureComponent } from 'react'
import classnames from "classnames"

export default class App extends PureComponent {

  render() {
    const IsLogin = true;
    return (

      <div>
        {/* <h2 className={"foo " + (IsLogin ? "active" : "")}>我是App</h2>
        <h2 className={["app", "demo"].join(" ")}>我是App</h2> */}

        <h2 className={classnames("bar", "item")}>我是App</h2>
        <h2 className={classnames({ "active": IsLogin }, 1, null, "item", undefined)}>我是App</h2>
        <ul>
          <li>水果</li>
          <li>水果</li>
          <li>水果</li>
          <li>水果</li>
        </ul>
      </div>
    )
  }
}
