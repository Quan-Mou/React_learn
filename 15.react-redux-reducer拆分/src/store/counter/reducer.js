
import { Add_NUMBER, Sub_NUMBER, INCREMNT, DECRMENT } from "./constant"


const CounterInfo = {
  counter: 0
}


// counter的reducer
function CounterReducer(state = CounterInfo, action) {
  console.log(state.counter);
  console.log(action);
  switch (action.type) {
    case Add_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case Sub_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case INCREMNT:
      return { ...state, counter: state.counter + 1 }
    case DECRMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state;
  }
}

export default CounterReducer