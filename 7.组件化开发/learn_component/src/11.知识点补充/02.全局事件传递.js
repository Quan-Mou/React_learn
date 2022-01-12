import React, { PureComponent } from 'react'



class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      Text: "Home"
    }
  }
  render() {
    return (
      <div>{this.state.Text}</div>
    )
  }
}

class ProFile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello Home"
    }
  }
  render() {
    return (
      <div>
        <button>点击</button>
      </div>
    )
  }
}

//  这里要用events这个库 ，但是后面会用redux，所以这里不写
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }
  render() {
    return (
      <div>
        <Home />
        <ProFile />
      </div>
    )
  }

}
