import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import CreateSagaMiddleware from "redux-saga"
import reducer from "./reducer"

import Saga from "./saga"

// 1.使用reudx-saga
const sagaMiddleware = CreateSagaMiddleware();


// 使用redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhance = composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware));

// 应用Middleware
// Middleware(中间件1，中间件2，中间件3，...);
// const enhance = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, enhance);
// createStore的第二个参数接受一个enhancer

// 传入生成器函数,启动saga,做拦截
sagaMiddleware.run(Saga);

export default store


