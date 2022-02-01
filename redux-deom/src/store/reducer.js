const InitialState = {
  InputVal: '',
  data: ['a', 'b', 'c']
}

export default function reducer(state = InitialState, action) {
  switch (action.type) {
    case "InputChange":
      let newState1 = { ...state };
      newState1.InputVal = action.val;
      return newState1;
    case "AddItem":
      let newState2 = { ...state };
      newState2.data.push(action.val)
      newState2.InputVal = ''
      return newState2;
    default:
      return state
  }

  // if (action.type === "InputChange") {
  //   // let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
  //   let newState = { ...state };
  //   newState.InputVal = action.val
  //   return newState;
  // }

  // if (action.type === "AddItem") {
  //   // let newState = JSON.parse(JSON.stringify(state))
  //   let newState = { ...state };
  //   newState.data.push(action.val)
  //   newState.InputVal = ''
  //   return newState;
  // }
  // return state

}