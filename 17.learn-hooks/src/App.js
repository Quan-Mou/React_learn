import React, { createContext, useState } from 'react';

import CounterClass from "./01.体验hooks/1.counter-class"
import CounterHooks from './01.体验hooks/2.counter-hooks';
import CounterHook from "./01.体验hooks/3.counter-hooks"
import MultiStateHook from './02.useState使用/01.多个状态的使用';
import ClassChangeTitle from './03.useEffect使用/01.class实现title的修改';
import EffectChangeTitle from './03.useEffect使用/02.Effect实现title的修改';
import EffectCancel from './03.useEffect使用/03.useEffect模拟订阅和取消订阅';
import MoreEffect from './03.useEffect使用/04.多个Effect的使用';
import CustomHook from './11.自定义Hook/01.自定义hook的基本使用';
import CustomContextShare from './11.自定义Hook/02.自定义hook练习-Context共享';
import ContextHook from './4.useContext使用/01.useContext使用';
import ReducerHoos from './5.useReducer使用/01.useReducer使用';
import CallbackHook from './6.useCallback/01.useCallback不能进行的优化';
import CallbackHook2 from './6.useCallback/02.useCallback进行的优化';
import MemoHook from './7.useMemo/01.useMemo复杂的应用';


export const UserContext = createContext();
export const ThemeContext = createContext();
export const Token = createContext();

export default function App() {
  const [show, setShoow] = useState(true);
  return (
    <div>
      {/* 1.useState */}
      {/* <CounterClass /> */}
      {/* <CounterHooks /> */}
      {/* <CounterHook /> */}
      {/* <MultiStateHook /> */}

      {/* 2.useEffect */}
      {/* <ClassChangeTitle /> */}
      {/* <EffectChangeTitle /> */}
      {/* <EffectCancel/> */}
      {/* <MoreEffect /> */}

      {/* 3.useContext */}
      {/* <UserContext.Provider value={{ name: "权某人", age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: "18px", color: "red" }}>
          <ContextHook />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* 4.useReducer */}
      {/* <ReducerHoos /> */}

      {/* 5.useCallback */}
      {/* <CallbackHook /> */}
      {/* <CallbackHook2 /> */}

      {/* 6.useMemo */}
      {/* <MemoHook /> */}


      {/* 11.自定义hook */}
      {/* {show ? <CustomHook /> : null} */}
      <UserContext.Provider value={{ name: "curry", age: 32 }}>
        <Token.Provider value="ererfsdf">
          <CustomContextShare />
        </Token.Provider>
      </UserContext.Provider>
      <button onClick={e => setShoow(!show)}>切换</button>

    </div>
  );
}
