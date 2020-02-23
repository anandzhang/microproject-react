import React from 'react'
import PubSub from 'pubsub-js'

export default class AddComment extends React.Component {
  constructor(props) {
    super(props)
    this.name = React.createRef()
    this.content = React.createRef()
  }

  handlePost = () => {
    PubSub.publish('addcomment', {
      name: this.name.current.value,
      content: this.content.current.value
    })
    this.name.current.value = null
    this.content.current.value = null
  }

  render() {
    return (
      <div>
        <h2>发表评论</h2>
        昵称：<input type="text" ref={this.name} /><br />
        内容：<textarea ref={this.content}></textarea><br />
        <button onClick={this.handlePost}>发表</button>
      </div>
    )
  }
}