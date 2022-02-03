import { takeEvery, put, all } from "redux-saga/effects"
import axios from "axios"
import { getSagaHomeMultidata_Action, Banner_Action, Recommend_Action } from "./ActionCreator"
// takeEvery：监听每个action

// 默认传入监听的action
function* getBannerData(action) {
  // 返回的是promise它内部会把结果给返回
  const ret = yield axios.get("http://152.136.185.210:7878/api/hy66/home/multidata");
  const data = ret.data.data;
  const banner = data.banner.list;
  const recommend = data.recommend.list;
  // 它内部对dispatch做了封装叫put
  // yield put(Banner_Action(banner));
  // yield put(Recommend_Action(recommend)); // 它内部会对put做循环,判断它返回对象的done,但是还有一种写法就是all()
  yield all([
    yield put(Banner_Action(banner)),
    yield put(Recommend_Action(recommend))
  ]);
}
function* Mysaga() {
  // takeEvery(监听的action的type,生成器函数):(可以理解为拦截哪个action,拦截后做什么操作,)
  yield takeEvery(getSagaHomeMultidata_Action.type, getBannerData)
  // 除了使用takeEvery还可以使用takeLaTextTrackList()
  // 它们的区别:
  // tokeLatest:依次只能监听让一个,如果有多个始终都是执行最后一个
  // takeEvery:每一个都会被执行
  // 如果要监听多个action里面的type:
  // yield all([
  //   yield takeEvery(getSagaHomeMultidata_Action.type, getBannerData),
  //   yield takeEvery(Banner_Action.type, getBannerData),
  // ])
}
export default Mysaga