import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h2>我-Fragment</h2>
        <ul>
          <li>你好</li>
          <li>你好</li>
          <li>你好</li>
        </ul>
      </React.Fragment>
    )
  }
}
class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: "雷利", age: 40 }, { name: "罗杰", age: 42 }, { name: "御田", age: 39 }]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((item, index) => {
            // return (
            // 使用了Fragment的短语法就能添加key
            // < key={item.name}>
            //   <div>{item.name}</div>
            //   <p>{item.age}</p>
            // </>
            // )
            return (
              <React.Fragment key={item.name}>
                <div>{item.name}</div>
                <p>{item.age}</p>
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}
