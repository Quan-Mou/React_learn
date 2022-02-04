import { Add_NUMBER, Sub_NUMBER, INCREMNT, DECRMENT } from "./constant"


export const add_Action = (num) => {
  return {
    type: Add_NUMBER,
    num
  }
}

export const sub_Action = (num) => {
  return {
    type: Sub_NUMBER,
    num
  }
}
export const incrment_Action = () => {
  return {
    type: INCREMNT,

  }
}
export const decrment_Action = () => {
  return {
    type: DECRMENT,

  }
}





