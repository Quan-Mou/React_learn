import React, { PureComponent } from 'react';
// import About from './pages/About';
// import Home from './pages/Home';

// import Home from "./pages/Home2"
// import About from './pages/About2自定义connect';

// import Home from "./pages/Home3"
// import About from "./pages/About3-react-redux-connect"

// import Home from "./pages/Home4"
// import About from "./pages/About4-redux-thunk"

import Home from "./pages/Home5"
import About from "./pages/About5-redux-saga"

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
