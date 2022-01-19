import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import axios from "axios"

// 6.默认配置
axios.defaults.baseURL = "https://httpbin.org"
axios.defaults.headers.common['Authorization'] = "xxx";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 4000;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


