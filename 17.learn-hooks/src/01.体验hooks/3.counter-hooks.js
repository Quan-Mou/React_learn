import React, { useState } from 'react';

export default function CounterHooks() {
  const [counter, setCounter] = useState(0)//

  function handleCounter() {
    setCounter(prev => prev += 10); // 可以传入一个函数，它的参数是它上一个的返回值
  }
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => handleCounter()}>+10</button>
      <button >-1</button>
    </div>
  );
}
