import React, { useEffect, useState } from 'react';

export default function EffectChangeTitle() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = counter
  })
  return (
    <div>
      <h2>counter：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
