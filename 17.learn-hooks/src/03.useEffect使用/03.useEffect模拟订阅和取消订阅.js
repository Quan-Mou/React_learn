import React, { useEffect, useState } from 'react';

export default function EffectCancel() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('订阅一些事件');
    return () => {
      console.log('取消订阅事件');
    }
  });

  return (
    <div>
      <h2>counter：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
