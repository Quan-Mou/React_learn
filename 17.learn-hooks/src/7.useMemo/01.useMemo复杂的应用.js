import React, { useMemo, useState } from 'react'


function calcNumber(counter) {
  console.log('进来');
  let total = 0;
  for (let i = 1; i <= counter; i++) {
    total += i;
  }
  return total;
}

export default function MemoHook() {
  const [counter, setCounter] = useState(5);
  console.log(counter);
  const total = useMemo(() => {
    return calcNumber(counter);
  }, [counter]);
  console.log(total);
  return (
    <div>
      <h2>计算数字的和：{total}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>

  )
}
