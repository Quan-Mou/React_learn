import React, { createContext } from 'react';

import CounterClass from "./01.体验hooks/1.counter-class"
import CounterHooks from './01.体验hooks/2.counter-hooks';
import CounterHook from "./01.体验hooks/3.counter-hooks"
import MultiStateHook from './02.useState使用/01.多个状态的使用';
import ClassChangeTitle from './03.useEffect使用/01.class实现title的修改';
import EffectChangeTitle from './03.useEffect使用/02.Effect实现title的修改';
import EffectCancel from './03.useEffect使用/03.useEffect模拟订阅和取消订阅';
import MoreEffect from './03.useEffect使用/04.多个Effect的使用';
import ContextHook from './4.useContext使用/01.useContext使用';
import ReducerHoos from './5.useReducer使用/01.useReducer使用';


export const UserContext = createContext();
export const ThemeContext = createContext();

export default function App() {
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
      <ReducerHoos />


    </div>
  );
}
