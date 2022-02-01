import React, { PureComponent } from 'react';
import { sub_Action, incrment_Action } from "../store/ActionCreator"
import connect from "../utils/connect"
class About extends PureComponent {

  render() {
    return (
      <>
        <div>
          <h2>About :当前计数：{this.props.counter}</h2>
          <button onClick={e => this.props.subNum(5)}>-5</button>
          <button onClick={e => this.props.incrment()}>+1</button>
        </div>
      </>
    );
  }

}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};
const mapDispatchToProps = dispatch => {
  return {
    subNum: function (num) {
      dispatch(sub_Action(num));
    },
    incrment: function () {
      dispatch(incrment_Action());
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
