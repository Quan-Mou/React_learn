import React, { PureComponent } from 'react'
import axios from "axios"

export default class App extends PureComponent {
  async componentDidMount() {

    // 1.发送网络请求的基本操作
    // axios({
    //   // 不写请求方法默认就是get
    //   url: "https://httpbin.org/get",
    //   params: { name: "Quan", age: 17 }
    // }).then(ret => {
    //   console.log(ret);
    // }).catch(err => {
    //   console.log(err);
    // })

    // axios({
    //   url: "https://httpbin.org/post",
    //   data: { name: "Quan", age: 18 },
    //   method: "post"
    // }).then(ret => {
    //   console.log(ret);
    // }).catch(err => {
    //   console.log(err);
    // })

    // 2.发送get/post请求
    // axios.get("https://httpbin.org/get", {
    //   params: {
    //     name: "quan",
    //     height: 1.8
    //   }
    // }).then(ret => {
    //   console.log(ret);
    // }).catch(err => {
    //   console.log(err);
    // })

    // axios.post("https://httpbin.org/post", {
    //   User: "QuanMou",
    //   password: 123456
    // }).then(ret => {
    //   console.log(ret);
    // }).catch(err => {
    //   console.log(err);
    // })

    // 3.简单阅读一下axios的e部分源码

    // 4.除了promise的ApI之外还有一种方法比较常用：async await
    // const ret = await axios({ url: "https://httpbin.org/get", params: { name: "quan" } });
    // console.log(ret);

    // 5.axios.all 并发请求，在拿到两个数据之后
    // const ret1 = await axios({ url: "https://httpbin.org/get", params: { name: "quan" } });
    // const ret2 = await axios({ url: "https://httpbin.org/post", data: { name: "quan" }, method: "post" });
    // axios.all([ret1, ret2]).then(ret => {
    //   console.log(ret);
    // })

    // // 7.自定义实例
    // const instance1 = axios.create({
    //   // 这个实例的配置
    //   baseURL: "https://baidu.com",
    //   timeout: 4000
    // })

    // const instance2 = axios.create({
    //   // 这个实例的配置
    //   baseURL: "https://httpbin.org",
    //   timeout: 4000
    // })
    // // instance1的默认配置
    // axios.defaults.headers.common['Authorization'] = "xxx";

    // instance2.get('/get', {
    //   params: { name: "hhh" }
    // }).then(ret => {
    //   console.log(ret);
    // })

    // 8.拦截器
    axios({
      url: "https://httpbin.org/get",
      params: {
        name: "coder",
        age: 18
      }
    })
    // 请求拦截
    axios.interceptors.request.use(config => {
      console.log("请求拦截");
      return config;
    }, err => {

    })
    axios.interceptors.response.use(response => {
      console.log("响应拦截");
      return response;
    }, err => {

    })
  }
  render() {
    return (
      <div>
        app
      </div>
    )
  }
}
