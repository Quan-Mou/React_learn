import { ADD_NUMBER, Sub_NUMBER, INCRMENT_NUMBER, DECRMENT_NUMBER } from "./constant.js"

export const Add_Action = (num) => {
  return {
    type: ADD_NUMBER,
    num
  }
}

export const Sub_Action = (num) => {
  return {
    type: Sub_NUMBER,
    num
  }
}

export const Incrment = () => {
  return {
    type: INCRMENT_NUMBER
  }
}

export const Decrment = () => {
  return {
    type: DECRMENT_NUMBER
  }
}
