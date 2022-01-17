import React, { PureComponent } from 'react'
import moment from "moment"
import { Comment, Tooltip } from "antd"
import { DeleteOutlined } from '@ant-design/icons';
export default class CommentItem extends PureComponent {
  render() {
    const Info = this.props.commentInfo;
    const currentIndex = this.props.currentEle;
    return (
      <div>
        <Comment
          actions={[<span onClick={e => this.deleteComment(currentIndex)}><DeleteOutlined></DeleteOutlined> 删除</span>]}
          avatar={Info.UserAvatar}
          author={<a href="/#">{Info.NickName}</a>}
          content={
            <p>
              {Info.CommentText}
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      </div>
    )
  }
  deleteComment(index) {
    this.props.deleteComment(index)
  }
}
