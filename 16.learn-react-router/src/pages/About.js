import React, { PureComponent } from 'react';
import { NavLink, Route } from 'react-router-dom';
import AboutBlog from "./AboutChildren/AboutBlog"
import AboutMe from "./AboutChildren/AboutMe"
import AboutFuture from "./AboutChildren/AboutFuture"
import { renderRoutes, matchRoutes } from "react-router-config"

// import routes from "../"

export default class About extends PureComponent {
  render() {
    console.log(this.props);
    const ret = matchRoutes(this.props.route.routes, '/about');
    console.log(ret);
    return (
      <div>
        <h2>关于</h2>
        <NavLink to="/about" activeClassName='active-link' style={{ marginLeft: "10px" }}>关于博客</NavLink>
        <NavLink to="/about/me" activeClassName='active-link' style={{ marginLeft: "10px" }}>关于我</NavLink>
        <NavLink to="/about/future" activeClassName='active-link' style={{ marginLeft: "10px" }}>未来</NavLink>

        {/* <Route exact path="/about" component={AboutBlog} />
        <Route path="/about/me" component={AboutMe} />
        <Route path="/about/future" component={AboutFuture} /> */}

        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

