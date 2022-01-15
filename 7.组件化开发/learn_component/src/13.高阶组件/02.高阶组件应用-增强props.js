import React, { PureComponent } from 'react'

class Home extends PureComponent {

  render() {
    console.log(this.props);
    return (
      <h2>Home:{`昵称：${this.props.nickName},等级：${this.props.level} 区域：${this.props.region}`}</h2>
    )
  }
}

class Footer extends PureComponent {
  render() {
    return (
      <h2>Footer:{`昵称：${this.props.nickName},等级：${this.props.level} 区域：${this.props.region}`}</h2>
    )
  }
}

function enhanceRegion(WraperComponent) {
  return class NewComponent extends PureComponent {
    render() {
      return <WraperComponent {...this.props} region="中国" />
    }
  }
}

const EnhanceHome = enhanceRegion(Home);
const EnhanceFooter = enhanceRegion(Footer);

export default class App extends PureComponent {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        App
        <EnhanceHome nickName="库里" level={90} />
        <EnhanceFooter nickName="追梦格林" level={80} />
      </div>
    )
  }
}
