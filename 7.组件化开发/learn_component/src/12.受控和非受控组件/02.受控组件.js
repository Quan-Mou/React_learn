import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='user'>
            用户名：<input type="text" id="user" value={this.state.user} onChange={e => this.handleUser(e)}></input>
          </label>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
  handleUser(e) {

    this.setState({
      user: e.target.value
    })
  }

  handleSubmit(e) {
    // 取消默认事件
    e.preventDefault();
    console.log(this.state.user);
  }
}
