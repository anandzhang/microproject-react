import ActionTypes from './action-types'

export default function (state = 0, action) {
  const { type, value } = action
  switch (type) {
    case ActionTypes.ADD:
      return state + value
    case ActionTypes.MINUS:
      return state - value
    default:
      return state
  }
}
