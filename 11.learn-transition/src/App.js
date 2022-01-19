import React, { PureComponent } from 'react';

// import CSSTransitionDemo from './transtion/CSSTransitionDemo'
import SwitchTransitionDemo from './transtion/SwitchTransitionDemo';
import TransitionGroup from './transtion/TransitionGroup';

export default class App extends PureComponent {

  render() {
    return (
      <div>
        {/* <CSSTransitionDemo /> */}
        {/* <SwitchTransitionDemo></SwitchTransitionDemo> */}
        <TransitionGroup></TransitionGroup>
      </div>
    )
  }
}
