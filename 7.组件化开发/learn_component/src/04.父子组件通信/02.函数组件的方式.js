import React, { Component } from 'react'

import PropTypes from 'prop-types';
function ChildCpn(props) {
  const { name, age, width, } = props;
  const { list } = props;
  return (
    <div>
      <h2>我是ChildCpn函数子组件</h2>
      <h2>{name + "," + age + "," + width}</h2>
      <ul>
        {
          list.map((item, index) => {
            return <li>{item}</li>
          })
        }
      </ul>
    </div >
  )
}

// 设置传递值的类型
// 注意这里的propTypes 首字母是小写的
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  width: PropTypes.number,
  list: PropTypes.array
}

ChildCpn.defaultProps = {
  name: '权爷',
  age: 17,
  width: 1.88,
  list: ['你好', '我是', 'xxx']
}

// 如果是类组件它的默认值有另外一种写法：
class ChildCpn2 extends Component {
  // es6中的class fields写法
  static defaultProps = {
    name: "类组件的默认值写法",
    age: "类组件的默认值写法",
    width: "类组件的默认值写法"
  }
  static propTypes = {
    // xxx
  }

  constructor(props) {
    super(props);
    this.props = this.props;
  }
  render() {
    return (
      <div>
        <h2>{this.props.name + "," + this.props.age + "," + this.props.width}</h2>
      </div>
    )
  }
}

export default function App() {
  return (
    <div>
      <ChildCpn name="curry" age={33} width={1.91} list={["nba", "cba", "aba"]} />
      <ChildCpn name="威金斯" age={27} width={2.01} list={["aaa", "bbb", "ccc"]} />
      <ChildCpn />
      <ChildCpn2 name="哈哈" age="哈哈" width="哈哈" />
      <ChildCpn2 />
    </div>
  )
}
