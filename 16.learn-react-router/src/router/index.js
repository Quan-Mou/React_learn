import Home from "../pages/Home"
import About from "../pages/About"
import Profile from "../pages/Profile"
import User from "../pages/User"
import Login from "../pages/Login"
import Product from "../pages/Product"
import Detail from "../pages/Detail"
import Detail2 from "../pages/Detail2"
import Detail3 from "../pages/Detail3"

import AboutBlog from "../pages/AboutChildren/AboutBlog"
import AboutFuture from "../pages/AboutChildren/AboutFuture"
import AboutMe from "../pages/AboutChildren/AboutMe"
const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        component: AboutBlog
      },
      {
        path: "/about/futurn",
        component: AboutFuture
      },
      {
        path: "/about/me",
        component: AboutMe
      }
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/user",
    component: User
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/detail2',
    component: Detail2
  },
  {
    path: '/detail3',
    component: Detail3
  }
]

export default routes

