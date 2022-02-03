
import { ADD_NUMBER, Sub_NUMBER, INCRMENT_NUMBER, DECRMENT_NUMBER } from "./constant.js"

const initialState = {
  counter: 0
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case Sub_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case INCRMENT_NUMBER:
      return { ...state, counter: state.counter + 1 }
    case DECRMENT_NUMBER:
      return { ...state, counter: state.counter - 1 }
    default:
      return state;
  }
}

