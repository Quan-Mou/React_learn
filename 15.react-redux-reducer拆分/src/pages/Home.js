import React, { PureComponent } from 'react';
import store from "../store/index"
import { add_Action, decrment_Action, } from "../store/ActionCreator"
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  render() {
    return (
      <>
        <h2>Home：当前计数：{this.state.counter}</h2>
        <button onClick={() => this.SubNum()}>+5</button>
        <button onClick={() => this.incrment()}>-1</button>
      </>
    );
  }
  SubNum() {
    store.dispatch(add_Action(5));
  }
  incrment() {
    store.dispatch(decrment_Action());
  }
}
