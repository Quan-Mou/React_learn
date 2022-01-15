import React, { PureComponent } from 'react'


// 高阶函数返回类组件
function enhanceComponent1(WraperComponent,) {
  class NewComponent extends PureComponent {
    render() {
      return (
        <WraperComponent {...this.props} />
      )
    }
  }
  WraperComponent.displayName = "Root"
  return NewComponent
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}


// 2.高阶组件里面返回函数组件
function enhanceComponent2(WraperComponent,) {
  function NewComponent(props) {
    return <WraperComponent {...props} />
  }
  NewComponent.displayName = "Curry";
  return NewComponent;
}

// const demo = class { }
// const Fndemo = function () { }

const NewComponent = enhanceComponent2(App);

export default NewComponent
