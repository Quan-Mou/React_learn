import { combineReducers } from "redux"
import { reducer as CounterReducer } from "./counter"
import { reducer as HomeReducer } from "./home"

// 1.第一种合并方式,redux其实提供了一个函数来帮助我们合并叫combineReducers()
// function reducer(state = {}, action) {
//   console.log(state);
//   return {
//     CounterInfo: CounterReducer(state.CounterInfo, action),
//     HomeInfo: HomeReducer(state.HomeInfo, action)
//   }
// }

// 2.combineReducers() 它内部会帮你做很多操作

const reducer = combineReducers({
  CounterInfo: CounterReducer,
  HomeInfo: HomeReducer
})


export default reducer