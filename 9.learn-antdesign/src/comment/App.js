import React, { PureComponent } from 'react'

import CommentItem from "comment/components/CommentItem"
import InputComment from "comment/components/InputComment"
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      comment: []
    }
  }
  render() {
    return (
      <div style={{ padding: "20px" }}>
        {
          this.state.comment.map((item, index) => {
            return <CommentItem commentInfo={item} currentEle={index} key={item.time} deleteComment={e => this.deleteComment(e)}></CommentItem>
          })
        }
        <InputComment GetCommentInfo={e => this.AddCommentInfo(e)} />
      </div>
    )
  }
  AddCommentInfo(info) {
    this.setState({
      comment: [...this.state.comment, info]
    })
  }
  deleteComment(index) {
    const newComment = [...this.state.comment]
    newComment.splice(index, 1)
    this.setState({
      comment: newComment
    })
  }
}
