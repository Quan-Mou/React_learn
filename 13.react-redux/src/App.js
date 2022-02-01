import React, { PureComponent } from 'react';
// import About from './pages/About';
// import Home from './pages/Home';

import Home from "./pages/Home2"
import About from './pages/About2自定义connect';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <About></About>
      </div>
    )
  }
}
