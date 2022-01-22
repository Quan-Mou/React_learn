import store from "./store/index.js"

import { Add_Action, Sub_Action, Incrment, Decrment } from "./store/ActionCreate.js"

store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})

store.dispatch(Add_Action(10));
store.dispatch(Add_Action(10));
store.dispatch(Sub_Action(10));
store.dispatch(Incrment());
store.dispatch(Decrment());