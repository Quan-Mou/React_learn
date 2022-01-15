import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <h2>Home</h2>
    )
  }


}

function enhanceMountTime(WrapeedComponent) {
  const NewCpn = class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.WillMoutTime = Date.now();

    }
    componentDidMount() {
      this.DitMoutTime = Date.now();
      const MountTime = this.DitMoutTime - this.WillMoutTime;
      console.log(`${WrapeedComponent.name}渲染时间是：${MountTime}`);
    }
    render() {
      return <WrapeedComponent {...this.props} />
    }
  }

  return NewCpn
}


class About extends PureComponent {
  render() {
    return (
      <h2>About</h2>
    )
  }
}

const MountTimeHome = enhanceMountTime(Home);
const MountTimeAbout = enhanceMountTime(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h3>App</h3>
        {/* 计算一个组件创建到挂载完毕的时间 */}
        <MountTimeHome />
        <MountTimeAbout />
      </div>
    )
  }
}
