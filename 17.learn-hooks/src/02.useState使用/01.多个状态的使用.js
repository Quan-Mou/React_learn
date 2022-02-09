import React, { useState } from 'react';

export default function MultiStateHook() {
  const [name, setName] = useState("curry");
  const [age, setage] = useState(18);
  return (
    <div>
      <h2>姓名：{name}</h2>
      <h2>年龄：{age}</h2>

    </div>
  );
}
