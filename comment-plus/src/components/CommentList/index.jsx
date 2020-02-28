import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { asyncInitComment, deleteComment } from '../../redux/actions'
import './index.css'

class CommentList extends React.Component {
  handleDelete = index => this.props.delete(index)

  componentDidMount() {
    this.props.init()
  }

  renderList = () => {
    return this.props.comments.map((item, index) => {
      return (
        <li key={index}>
          <p className='name'>{item.name}说：</p>
          <p className='content'>{item.content}</p>
          <div className='delete' onClick={() => this.handleDelete(index)}>删除</div>
        </li>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <h2>评论列表 总:{this.props.total}</h2>
        {this.props.total ? '' : '当前还没有任何评论，做个沙发吧。'}
        <ul className='comment-list'>{this.renderList()}</ul>
      </Fragment>
    )
  }
}

export default connect(
  (state) => ({ comments: state.comments, total: state.total }),
  { init: asyncInitComment, delete: deleteComment }
)(CommentList)
