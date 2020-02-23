import React, { Fragment } from 'react'
import AddComment from './components/AddComment'
import CommentList from './components/CommentList'

export default function () {
  return (
    <Fragment>
      <h1>评论管理</h1>
      <AddComment />
      <hr />
      <CommentList />
    </Fragment>
  )
}
