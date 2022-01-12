import React, { createRef, PureComponent } from 'react'

class Footer extends PureComponent {
  render() {
    return (
      <div>
        <h2>哈哈</h2>
      </div>
    )
  }
}


function Demo() {
  return (
    <div>我是函数组件我没有ref</div>
  )
}

export default class App extends PureComponent {
  constructor() {
    super();
    this.TitleFnRef = null;
    this.ClassRefVal = React.createRef();
    this.state = {
      TitleRef: React.createRef()
    }
  }
  render() {
    return (
      <div>
        {/* 1.传入字符串 */}
        <h2 ref="TitleRef">Hello Quan</h2>
        {/* 2.传入对象 */}
        <h2 ref={this.state.TitleRef}>Hello Quan</h2>
        {/* 3.传入函数 */}
        <h2 ref={arg => this.TitleFnRef = arg}>Hello Quan</h2>
        <button onClick={e => this.ChangeText()}>切换文字</button>

        <Footer ref={this.ClassRefVal} />
        <Demo ref="demo" />
      </div>
    )
  }
  ChangeText() {
    // 1.传入字符串
    this.refs.TitleRef.innerHTML = "Hello HTML";

    // 2.传入对象
    this.state.TitleRef.current.innerHTML = "Hello CSS";

    // 3.传入函数
    this.TitleFnRef.innerHTML = "Hello JavaScript"

    console.log(this.ClassRefVal.current); // 得到的时Footer组件对象

    console.log(this.refs.demo); // 函数组件没有ref，因为它没有实例
  }
}
