import React, { PureComponent } from 'react';
import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import Profile from "./pages/Profile"



export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link>

          <Routes>
            <Route path="/" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/Profile" element={Profile} />
          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}
