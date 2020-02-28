import React from 'react'
import AddComment from './components/AddComment'
import CommentList from './components/CommentList'
import './App.css'

export default function () {
  return (
    <div className='container'>
      <h1>评论管理</h1>
      <AddComment />
      <CommentList />
    </div>
  )
}
