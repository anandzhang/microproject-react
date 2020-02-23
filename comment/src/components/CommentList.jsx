import React, { Fragment } from 'react'
import PubSub from 'pubsub-js'

export default class CommentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  handleAdd = (name, msg) => {
    const list = this.state.list
    list.push(msg)
    this.setState({ list })
  }

  deleteComment = index => {
    const list = this.state.list
    list.splice(index, 1)
    this.setState({ list })
  }

  componentDidMount() {
    PubSub.subscribe('addcomment', this.handleAdd)
  }

  renderList = () => {
    return this.state.list.map((item, index) => {
      return (
        <Fragment key={index}>
          <dt>{item.name}说：</dt>
          <dd>{item.content} --- <button onClick={this.deleteComment}>删除评论</button></dd>
        </Fragment>
      )
    })
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <h2>评论列表</h2>
        {list.length ? '' : '当前还没有任何评论，做个沙发吧。'}
        <dl>{this.renderList()}</dl>
      </div>
    )
  }
}