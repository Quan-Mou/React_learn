import React, { Component } from 'react'

function ProFileHeader(props) {
  console.log(props);
  return (
    <div>
      <h2>您的昵称：{props.nickName}</h2>
      <h2>等级：{props.grade}</h2>
    </div>
  )
}

class ProFile extends Component {

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* <ProFileHeader nickName={this.props.nickName} grade={this.props.grade} /> */}
        <ProFileHeader {...this.props} />
      </div>
    )
  }
}


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nickName: "权爷",
      grade: 100
    }
  }
  render() {
    return (
      <div>
        {/* <ProFile nickName={this.staet.nickName} grade={this.staet.grade} /> */}
        {/* 展开传入 */}
        <ProFile {...this.state} />

      </div>
    )
  }
}
