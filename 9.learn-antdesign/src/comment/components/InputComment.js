import React, { PureComponent } from 'react'
import { Input, Button } from 'antd';

const { TextArea } = Input;
export default class InputComment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      CommentText: ""
    }

  }
  render() {
    return (
      <div style={{ width: "360px" }}>
        <TextArea rows={4} onChange={e => this.InputText(e)} value={this.state.CommentText} />
        <Button type="primary"
          style={{ backgroundColor: "#158efe", borderColor: "#158efe", marginTop: "20px" }}
          onClick={e => this.SubmitComment()}>添加评论</Button>
      </div>
    )
  }
  InputText(e) {
    const newText = e.target.value
    this.setState({
      CommentText: newText
    })
  }
  SubmitComment() {
    const CommentInfo = {
      UserAvatar: "https://img2.baidu.com/it/u=2799831048,1053696520&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=491",
      NickName: "Stephen Curry",
      time: Date.now(),
      CommentText: this.state.CommentText
    }
    this.props.GetCommentInfo(CommentInfo)
    // this.state.CommentText = ""
    this.setState({
      CommentText: ""
    })

  }
}
