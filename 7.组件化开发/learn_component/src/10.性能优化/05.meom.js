import React, { Component, memo, PureComponent } from 'react'

const MemoHeader = memo(
  function Header() {
    console.log("Header调用了render方法");
    return (
      <div>
        Header组件
      </div>
    )
  }
)

function ProductList() {
  return (
    <ul>
      <li>小程序</li>
      <li>H5</li>
      <li>企业官网</li>
    </ul>
  )
}

const MemoMain = memo(
  function Main() {
    console.log("Main调用了render方法");
    return (
      <div>
        <h2></h2>
        <ProductList />
      </div>
    )
  }
)

function Footer() {
  console.log("Footer调用了render方法");
  return (
    <div>我是底部</div>
  )

}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.btnClick()}>+1</button>
        <MemoHeader />
        <MemoMain />
        <Footer />
      </div>
    )
  }
  btnClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
