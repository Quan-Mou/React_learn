import { Add_NUMBER, Sub_NUMBER, INCREMNT, DECRMENT, BANNERDATA, RECOMMENDDATA } from "./constant"
const initialState = {
  counter: 0,
  banner: [],
  recommend: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case Add_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case Sub_NUMBER:
      console.log('a');
      return { ...state, counter: state.counter - action.num }
    case INCREMNT:
      return { ...state, counter: state.counter + 1 }
    case DECRMENT:
      return { ...state, counter: state.counter - 1 }
    case BANNERDATA:
      let newState1 = { ...state };
      newState1.banner = action.banner;
      return newState1
    case RECOMMENDDATA:
      let newState2 = { ...state };
      newState2.recommend = action.banner;
      return newState2
    default:
      return state;
  }
}

export default reducer