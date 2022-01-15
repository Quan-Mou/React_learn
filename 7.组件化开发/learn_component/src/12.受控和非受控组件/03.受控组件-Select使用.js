import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      selectVal: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <select name="selectVal" value={this.state.selectVal} onChange={e => this.handleSelect(e)}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="pineapple">菠萝</option>
            <option value="Hami">哈密瓜</option>
          </select>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.selectVal);
  }
  handleSelect(e) {
    this.setState({
      selectVal: e.target.value
    })
  }
}
