import React, { PureComponent, } from 'react'
import ReactDOM from "react-dom"

import "./portals.css"
class Modal extends PureComponent {
  render() {
    console.log(this.props.children[0]);
    console.log(this.props);
    return (
      ReactDOM.createPortal(
        this.props.children,
        document.getElementById("modal")
      )
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Modal>
          <h1>TitleCenter</h1>
        </Modal>

      </div>
    )
  }
}
