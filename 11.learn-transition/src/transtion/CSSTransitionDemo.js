import React, { PureComponent } from 'react';
import { Card, Avatar } from "antd"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';
import "../transtion/CSSTransitionDemo.css"
const { Meta } = Card;
export default class CssTransition extends PureComponent {
  constructor() {
    super();
    this.state = {
      IsShow: true
    }
  }
  render() {
    const { IsShow } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.setState({ IsShow: !IsShow })}>点击显示隐藏</button>
        <CSSTransition in={IsShow} timeout={2000} classNames="my-node">
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}
