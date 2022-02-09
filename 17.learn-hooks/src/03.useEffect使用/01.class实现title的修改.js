import React, { PureComponent } from 'react';

export default class ClassChangeTitle extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    document.title = this.state.counter
    console.log('订阅一些事件');
  }
  componentWillUnmount() {
    console.log('取消事件订阅..');
  }
  componentDidUpdate() {
    document.title = this.state.counter
    console.log('dom更新');
  }
  render() {
    return (
      <div>
        <h2>title：{this.state.counter}</h2>
        <button onClick={e => this.setState({ counter: this.state.counter + 1 })}>+1</button>
      </div>
    );
  }
}
