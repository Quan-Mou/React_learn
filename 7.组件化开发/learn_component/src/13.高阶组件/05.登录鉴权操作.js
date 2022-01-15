import React, { PureComponent } from 'react'


function CartPage() {
  return <h2>购物车页面</h2>
}

function LoginPage() {
  return <h2>需要登录</h2>
}

// 高阶组件

function enhanceIsLogin(WrappedComponent) {
  const Cpn = props => {
    // console.log(props);
    if (props.isLogin) {
      return <WrappedComponent />
    } else {
      return <LoginPage />
    }
  }
  return Cpn;
}

const CartAuth = enhanceIsLogin(CartPage);


export default class extends PureComponent {
  render() {
    return (
      <div>
        <CartAuth isLogin={false} />
      </div>
    )
  }
}
