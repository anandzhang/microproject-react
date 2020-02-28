import ActionTypes from './action-types'

export const addComment = (value) => ({
  type: ActionTypes.ADD,
  data: value
})

export const deleteComment = (index) => ({
  type: ActionTypes.DELETE,
  data: index
})

export const setTotal = (value) => ({
  type: ActionTypes.SET,
  data: value
})

export const initComment = (comments) => ({
  type: ActionTypes.INIT,
  data: comments
})

export const asyncInitComment = () => {
  return async dispatch => {
    const comments = await fetch('/data.json').then(res => res.json())
    dispatch(initComment(comments))
    dispatch(setTotal(comments.length))
  }
}