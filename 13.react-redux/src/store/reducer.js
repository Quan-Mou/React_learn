import { Add_NUMBER, Sub_NUMBER, INCREMNT, DECRMENT } from "./constant"


const initialState = {
  counter: 0
}

function reducer(state = initialState, action) {
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

export default reducer