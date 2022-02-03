import React, { PureComponent } from 'react';
import { sub_Action, incrment_Action, GetHomeMutilData_Action, getSagaHomeMultidata_Action } from "../store/ActionCreator"
// import connect from "../utils/connect"
// import axios from "axios"
import { connect } from "react-redux"
class About extends PureComponent {

  render() {
    return (
      <>
        <div>
          <h2>About :当前计数：{this.props.counter}</h2>
          <button onClick={e => this.props.subNum(5)}>-5</button>
          <button onClick={e => this.props.incrment()}>+1</button>
          <h1>Banner</h1>
          <ul>
            {
              this.props.banner.map((item) => {
                return (<li key={item.acm}>{item.title}</li>)
              })
            }
          </ul>
          <h1>recommend</h1>
          <ul>
            {
              this.props.recommend.map((item) => {
                return (<li key={item.acm}>{item.title}</li>)
              })
            }
          </ul>
        </div>
      </>
    );
  }
  componentDidMount() {
    this.props.GetMutilData();
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banner: state.banner,
    recommend: state.recommend
  }
};
const mapDispatchToProps = dispatch => {
  return {
    subNum: function (num) {
      dispatch(sub_Action(num));
    },
    incrment: function () {
      dispatch(incrment_Action());
    },
    GetMutilData: function () {
      dispatch(getSagaHomeMultidata_Action)
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
