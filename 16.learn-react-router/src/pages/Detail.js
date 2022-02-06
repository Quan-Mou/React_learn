
import React from 'react';

export default function Detail(props) {
  return (
    <div>
      {/* 拿到动态路由传过来的东西 */}
      {/* this.props.match.params.id       */}
      <h2>动态路由：{props.match.params.id} </h2>
    </div>
  );
}
