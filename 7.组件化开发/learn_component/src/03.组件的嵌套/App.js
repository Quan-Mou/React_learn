import React, { Component } from 'react'

function Header() {
  return <h2>我是Header组件</h2>
}

function Main() {
  return (
    <div>
      <h2>我是Main组件</h2>
      <Banner />
      <ProductList />
    </div>
  )
}

function Footer() {
  return <h2>我是Footer组件</h2>
}
function Banner() {
  return (
    <div>banner组件</div>
  )
}

function ProductList() {
  return (
    <ul>
      <li>产品列表1</li>
      <li>产品列表2</li>
      <li>产品列表3</li>
      <li>产品列表4</li>
      <li>产品列表5</li>
    </ul>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
