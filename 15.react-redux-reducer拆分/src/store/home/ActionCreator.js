import axios from "axios"
import { BANNERDATA, RECOMMENDDATA, SAGA_GET_HOME_MULTIDATA } from "./constant"



// 轮播图和推荐数据
export const Banner_Action = (banner) => {
  return {
    type: BANNERDATA,
    banner
  }
}

export const Recommend_Action = (banner) => {
  return {
    type: RECOMMENDDATA,
    banner
  }
}

// redux-thunk 定义的action函数

export const GetHomeMutilData_Action = dispatch => {
  console.log('进来', dispatch);  // 默认会传dispat和getState过来
  axios({
    url: "http://152.136.185.210:7878/api/hy66/home/multidata"
  }).then(ret => {
    const data = ret.data.data;
    // console.log(ret.data.data.recommend.list);
    // this.props.GetBannerData(data.banner.list);
    // this.props.GetRecommendData(data.recommend.list);
    dispatch(Banner_Action(data.banner.list));
    dispatch(Recommend_Action(data.recommend.list));
  })
}

// saga拦截的的action
export const getSagaHomeMultidata_Action = {
  type: SAGA_GET_HOME_MULTIDATA
}



