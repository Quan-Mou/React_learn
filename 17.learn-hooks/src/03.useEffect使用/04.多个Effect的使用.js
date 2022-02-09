import React, { useEffect, useState } from 'react';

export default function MoreEffect() {
  const [isLogin, setisLogin] = useState(true);
  useEffect(() => {
    console.log('网络请求');
  }, [])  // 只会执行一次，不依赖任何值
  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
  // 这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
  useEffect(() => {
    console.log('订阅事件');
  })
  useEffect(() => {
    console.log('修改DOM');
  }, [isLogin])  //如果isLogin发生了变化就会重新执行
  return (
    <div>
      <button onClick={e => setisLogin(!isLogin)}>{isLogin ? '目前是登录状态' : '需要登录'}</button>
    </div>
  );
}
