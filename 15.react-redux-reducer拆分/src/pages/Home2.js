import React, { PureComponent } from 'react';
import store from "../store/index"
import connect from "../utils/connect"
import { add_Action, decrment_Action, } from "../store/ActionCreator"
class Home extends PureComponent {
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
        <h2>Home：当前计数：{this.props.counter}</h2>
        <button onClick={() => this.props.incrment(5)}>+5</button>
        <button onClick={() => this.props.decrment()}>-1</button>
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

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    incrment: function (num) {
      dispatch(add_Action(num));
    },
    decrment: function () {
      dispatch(decrment_Action());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


