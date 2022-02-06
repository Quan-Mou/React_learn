import React, { PureComponent } from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import Profile from "./pages/Profile"

import "./App.css"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      RouterInfo: [
        { url: "/", title: "首页" },
        { url: "/about", title: "关于" },
        { url: "/profile", title: "我的" }
      ],
      currendIndex: 0
    }
  }
  render() {
    const { currendIndex } = this.state
    return (
      <div>
        <BrowserRouter>
          {
            this.state.RouterInfo.map((item, index) => {
              return (
                <div key={item.url}>
                  <Link to={item.url}
                    onClick={() => this.add(index)}
                    className={currendIndex == index ? "active" : ''}
                  >{item.title}</Link>
                </div>
              )
            })
          }
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </BrowserRouter>
      </div>
    );
  }
  add(index) {
    this.setState({
      currendIndex: index
    })
  }
}
