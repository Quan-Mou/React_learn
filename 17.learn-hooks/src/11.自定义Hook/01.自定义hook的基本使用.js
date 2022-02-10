// import React, { useEffect } from 'react'

// const User = () => {
//   useEffect(() => {
//     console.log('组件创建');
//     return () => {
//       console.log('组件销毁')
//     }
//   })
//   return (
//     <h2>User</h2>
//   )
// }
// const Profile = () => {
//   useEffect(() => {
//     console.log('组件创建');
//     return () => {
//       console.log('组件销毁')
//     }
//   })
//   return (
//     <h2>Profile</h2>
//   )
// }
// export default function CustomHook() {
//   return (
//     <div>
//       <User />
//       <Profile />
//     </div>
//   )
// }


import React, { useEffect } from 'react'

const User = () => {
  useLoginQuit("User")
  return (
    <h2>User</h2>
  )
}
const Profile = () => {
  useLoginQuit("Profile")
  return (
    <h2>Profile</h2>
  )
}
export default function CustomHook() {
  return (
    <div>
      <User />
      <Profile />
    </div>
  )
}
function useLoginQuit(EleName) {
  useEffect(() => {
    console.log(`${EleName}组件创建`);
    return () => {
      console.log(`${EleName}组件销毁`)
    }
  }, [])
}