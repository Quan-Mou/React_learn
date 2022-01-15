import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='user'>
            用户名：<input type="text" id="user" ref={this.inputRef} onChange={e => this.handleUser(e)}></input>
          </label>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
  handleUser(e) {
    console.log(this.inputRef.current.value);
  }

  handleSubmit(e) {

    e.preventDefault();
    console.log(this.inputRef.current.value);
  }
}
