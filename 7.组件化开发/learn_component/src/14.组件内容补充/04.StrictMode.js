import React, { PureComponent, create } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <>
        <h2>Home</h2>
      </>
    )
  }
  UNSAFE_componentWillMount() {
    console.log('Home componentWillMount');
    console.log(this.refs.h2Ref);
  }
}

class ProFile extends PureComponent {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <>
        <h2 ref="h2Ref">ProFile</h2>
      </>
    )
  }
  // 1.检查不安全的生命周期函数
  UNSAFE_componentWillMount() {
    console.log('Home componentWillMount');

  }

}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <React.StrictMode>
          <ProFile />
        </React.StrictMode>
      </div>
    )
  }
}
