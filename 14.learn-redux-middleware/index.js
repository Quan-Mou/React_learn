import store from "./store/index.js"

import { Add_Action } from "./store/ActionCreate.js"

store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})

store.dispatch(Add_Action(10));
store.dispatch(Decrment());