import React, { useState } from 'react';

export default function CounterHooks() {
  const [counter, setCounter] = useState(0)//
  // useState 
  // 需要哪些参数：唯一的参数就是初始值
  // 返回值：
  // 返回一个数组，里面有两个值:'
  // 1.state, 也就是传入的初始值
  // 2.设置状态值的函数
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button >-1</button>
    </div>
  );
}
