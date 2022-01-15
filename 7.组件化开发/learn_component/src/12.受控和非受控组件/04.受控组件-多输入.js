import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: "",
      password: "",
      vaild: ""
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="user">
            用户名：<input type="text" name="user" id="user" onChange={e => this.handleData(e)}></input>
          </label>
          <label htmlFor="password">
            密码<input type="text" name="password" id="password" onChange={e => this.handleData(e)}></input>
          </label>
          <label htmlFor="vaild">
            验证码<input type="text" name="vaild" id="vaild" onChange={e => this.handleData(e)}></input>
          </label>
        </form>
      </div>
    )
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleData(e) {
    this.setState({
      // es6的语法：计算属性名
      [e.target.name]: e.target.value
    })
  }
}
