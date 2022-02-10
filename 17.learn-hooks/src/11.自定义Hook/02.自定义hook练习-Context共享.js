import React from 'react'
import useUserContext from "./hook/user-hook"
export default function CustomContextShare() {
  const [user, token] = useUserContext();
  console.log(user, token)
  return (
    <div>CustomContextShare</div>
  )
}
