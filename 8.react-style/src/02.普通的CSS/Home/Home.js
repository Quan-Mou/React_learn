import React, { PureComponent } from 'react'

import "./home.css"
export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='home'>Home</h2>
        <ul className="title">
          <li>首页</li>
          <li>推荐</li>
          <li>购物车</li>
        </ul>
      </div>
    )
  }
}
