const redux = require("redux");

const initialState = {
  counter: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCRMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECRMENT":
      return { ...state, counter: state.counter - 1 };
    case "Add_NUM":
      return { ...state, counter: state.counter + 5 }
    case "SUB_NUM":
      return { ...state, counter: state.counter - 3 }
    default:
      return state
  }
}

const store = redux.createStore(reducer);

// 监听store有没有发生改变
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})


function Add_Num(num) {
  return {
    type: "ADD_Num",
    num
  }
}


// actions
const action1 = {
  type: "INCRMENT"
}
const action2 = {
  type: "DECRMENT"
}
const action3 = {
  type: "Add_NUM",
  num: 5
}
const action4 = {
  type: "SUB_NUM",
  num: 5
}


// 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)