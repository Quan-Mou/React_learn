import React, { PureComponent } from 'react';
import { Route, Link, BrowserRouter, NavLink, Switch, withRouter } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import Profile from "./pages/Profile"

import "./App.css"
import NoMatch from './pages/NoMatch';
import User from './pages/User';
import Login from './pages/Login';
import Product from './pages/Product';
import Detail from './pages/Detail';

class App extends PureComponent {
  render() {
    const id = "ac";

    return (
      <div>
        {/* 1. */}
        {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}

        {/* 2. */}
        {/* <NavLink exact to="/" activeStyle={{ color: "red" }}>首页</NavLink>
          <NavLink to="/about" activeStyle={{ color: "red" }}>关于</NavLink>
          <NavLink to="/profile" activeStyle={{ color: "red" }}>我的</NavLink> */}

        {/* 3.使用activeClassName修改默认的类名 */}
        <NavLink exact to="/" activeClassName="active-link">首页</NavLink>
        <NavLink to="/about" activeClassName="active-link">关于</NavLink>
        <NavLink to="/profile" activeClassName="active-link">我的</NavLink>
        <NavLink to="/user" activeClassName="active-link">用户</NavLink>

        {/* 6.手动路由跳转 */}
        {/*如果是通过Route管理的组件会给它传过去三个属性*/}
        {/* <NavLink to="product" activeClassName='active-link'>商品</NavLink> */}
        <button onClick={e => this.jump()}>商品</button>

        {/* 7.动态路由 */}
        {/* 1.动态路由的方式 */}
        <NavLink to={`/detail/${id}`} activeClassName="active-link">详情</NavLink>


        {/*动态路由 /:user*/}
        {/*如果没有匹配的路由就会渲染这个*/}
        {/* 4. */}
        {/* <Switch>
            <Route exact path="/" component={Home} />a
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/:user" component={User} />
            <Route exact component={NoMatch} />
          </Switch> */}


        {/* 5. Redirect   嵌套路由 */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route exact component={NoMatch} />
        </Switch>
      </div>
    );
  }
  jump() {
    // console.log(this.props); 如果没有withRouter 拿到的会是一个空对象
    this.props.history.push('/product');
  }
}

export default withRouter(App);