import ActionTypes from './action-types'
import { combineReducers } from 'redux'

function comments(state = [], action) {
  const { type, data } = action
  switch (type) {
    case ActionTypes.ADD:
      return [...state, data]
    case ActionTypes.DELETE:
      const comments = state
      comments.splice(data, 1)
      return [...comments]
    case ActionTypes.INIT:
      return [...data]
    default:
      return state
  }
}

// 加一个 total 来尝试使用 combineReducers 管理多个数据
function total(state = 0, action) {
  const { type, data } = action
  switch (type) {
    case ActionTypes.SET:
      return data
    case ActionTypes.ADD:
      return state + 1
    case ActionTypes.DELETE:
      return state - 1
    default:
      return state
  }
}

export default combineReducers({ comments, total })