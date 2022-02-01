import React, { PureComponent } from 'react';
import store from "../store/index"
import { sub_Action, incrment_Action } from "../store/ActionCreator"
export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }
  render() {
    return (
      <>
        <div>
          <h2>About :当前计数：{this.state.counter}</h2>
          <button onClick={() => this.subNum()}>-5</button>
          <button onClick={() => this.incrment()}>+1</button>
        </div>
      </>
    );
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  subNum() {
    store.dispatch(sub_Action(5))
  }
  incrment() {
    store.dispatch(incrment_Action())
  }
}
