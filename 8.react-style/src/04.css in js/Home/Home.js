import React, { PureComponent } from 'react'
import styled from "styled-components"
const QHDiv = styled.div.attrs({
  FontSize: "30px"
})`
  h2 {
    color:yellow;
  }

  &h2 {
    color:pink;
  }
  ul li {
    color:orange;
    &:hover {
      color:green;
    }
  }
  ul li:first-child {
    color:${props => props.color};
    font-size:${props => props.FontSize};
  }
`

const HYButton = styled.button`
  padding:10px 10px;
  color:pink;
`

const QHButton = styled(HYButton)`
  font-size:30px;
`

export default class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      color: "red"
    }
  }
  render() {
    return (
      <div>
        <QHDiv color={this.state.color}>
          <h2>Home</h2>
          <ul>
            <li>首页</li>
            <li>推荐</li>
            <li>购物车</li>
          </ul>
        </QHDiv>

        <HYButton>hyButton</HYButton>
        <QHButton>qhButton</QHButton>
      </div>


    )
  }
}

