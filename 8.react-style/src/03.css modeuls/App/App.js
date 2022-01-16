import React, { PureComponent } from 'react'

import AppStyle from "./App.module.css"
import Home from "../Home/Home"
import Profile from "../Profile/Profile"

export default class App extends PureComponent {
  render() {
    return (
      <div id="main">
        <h2 className={AppStyle.home}>App</h2>
        <Home />
        <Profile />
      </div>
    )
  }
}
