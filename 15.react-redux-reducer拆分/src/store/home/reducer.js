import { BANNERDATA, RECOMMENDDATA, SAGA_GET_HOME_MULTIDATA } from "./constant"


const HomeInfo = {
  banner: [],
  recommend: []
}

// Home的reducer
function HomeReducer(state = HomeInfo, action) {
  switch (action.type) {
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


export default HomeReducer
