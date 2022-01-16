import React, { PureComponent } from 'react'

import Home from "../Home/Home"
import Profile from "../Profile/Profile"

import styled from "styled-components"

const QHbutton = styled.button`
  border-color:green;
  color:red;
`


export default class App extends PureComponent {
  render() {
    return (
      <div id="main">
        <h2>App</h2>
        <Home />
        <Profile />
        <QHbutton>我是按钮</QHbutton>
      </div>

    )
  }
}
