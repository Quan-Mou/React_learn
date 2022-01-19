import axios from "axios"
import { BaseUrl, TimeOut } from "./config"
const instance = axios.create({
  baseURL: BaseUrl,
  timeout: TimeOut
})

instance.interceptors.request.use(config => {
  console.log('请求拦截');
  return config;
}, err => {
  console.log('错误');
})

instance.interceptors.response.use(response => {
  console.log('响应拦截');
}, err => {
  console.log('err里面有个response。可以根据里面的内容做些操作');
})


export default instance;

