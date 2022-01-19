import React, { PureComponent } from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./SwitchTransitionDemo.css"
export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      IsState: true
    }
  }

  render() {
    const { IsState } = this.state;
    return (
      <div>
        <SwitchTransition mode="in-out">
          <CSSTransition classNames="my_btn" timeout={1000} key={IsState ? "on" : "off"}>
            <button onClick={e => this.setState({ IsState: !IsState })} style={{ marginLeft: "300px" }}>
              {IsState ? "on" : "off"}
            </button>
          </CSSTransition>
        </SwitchTransition>

      </div>
    );
  }
}



