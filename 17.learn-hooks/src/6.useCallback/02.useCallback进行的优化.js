import React, { useState, useCallback, useMemo, memo } from 'react'

const QHButton = memo((props) => {
  console.log(props.title + "渲染了");
  return <button onClick={props.increment}>+1</button>
})


export default function CallbackHook2() {
  const [count, setCount] = useState(0);
  const [show, setShoow] = useState(true);

  const increment1 = () => {
    console.log("执行increment1函数");
    setCount(count + 1);
  }

  const increment2 = useCallback(() => {
    console.log("执行increment2函数");
    setCount(count + 1);
  }, [count]);


  const increment3 = useMemo(() => {
    return () => {
      console.log("执行increment2函数");
      setCount(count + 1);
    }
  }, [count]);

  return (
    <div>
      <h2>CallbackHook: {count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
      <QHButton title="btn1" increment={increment1}></QHButton>
      <QHButton title="btn2" increment={increment2}></QHButton>
      <button onClick={e => setShoow(!show)}>切换</button>
    </div>
  )
}
