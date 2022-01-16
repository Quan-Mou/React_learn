import React, { PureComponent } from 'react'

import ProfileStyle from "./profile.module.css"
export default class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <div className={ProfileStyle.last}>哈哈哈</div>
      </div>
    )
  }
}
