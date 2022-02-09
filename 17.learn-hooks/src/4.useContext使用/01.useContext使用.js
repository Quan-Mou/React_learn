import React, { useContext } from 'react';
import { UserContext, ThemeContext } from '../App'
export default function ContextHook() {
  const User = useContext(UserContext);
  const Theme = useContext(ThemeContext);
  console.log(User);
  console.log(Theme); // 可以拿到共享过来的值

  return (
    <div>1223</div>
  );
}
