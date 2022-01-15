import React, { PureComponent, createRef, forwardRef } from 'react'


class Home extends PureComponent {
  render() {
    return (<h3>Home</h3>)
  }
}

// forwardRef 高阶组件，里面做了增强ref
const About = forwardRef(function About(props, ref) {
  return <h4 ref={ref}>About</h4>
})


export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      HomeRef: createRef(),
      H3Ref: createRef(),
      AboutRef: createRef()
    }
  }
  render() {

    return (
      <div>
        <h2>{this.props.children}</h2>
        <h3 ref={this.state.H3Ref}>app</h3>
        <Home ref={this.state.HomeRef} />
        <About ref={this.state.AboutRef} />
        <button onClick={e => this.printRef()}>打印ref</button>
      </div>
    )
  }
  printRef() {
    console.log(this.state.HomeRef.current);
    console.log(this.state.H3Ref.current);
    console.log(this.state.AboutRef.current);
  }
}