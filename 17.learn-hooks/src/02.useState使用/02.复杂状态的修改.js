import React, { useState } from 'react';

export default function MultiStateHook() {
  const [info, setInfo] = useState(["curry", "Sj"]);
  const [friend, setFriend] = useState([
    { name: "curry", age: 42 },
    { name: "科比", age: 43 },
    { name: "詹姆斯", age: 37 },
    { name: "维金斯", age: 28 },
  ]);
  function addName(name) {
    info.push(name)
    setInfo([...info]);
  }

  function ageAdd(index) {
    const newFriend = [...friend];
    newFriend[index].age += 1;
    setFriend([...newFriend]);
  }
  return (
    <div>
      <ul>
        {
          info.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => addName("科比")}>增加姓名</button>
      <h2>nba球星列表</h2>
      <ul>
        {
          friend.map((item, index) => {
            return (
              <li key={item.name}>
                <span>{item.name}</span> <span>{item.age}</span>
                <button onClick={e => ageAdd(index)}>age+1</button>
              </li>
            )
          })
        }
      </ul>

    </div>
  );
}
