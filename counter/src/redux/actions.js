import ActionTypes from './action-types'

export const addAction = value => ({
  type: ActionTypes.ADD,
  value
})

export const minusAction = value => ({
  type: ActionTypes.MINUS,
  value
})

export const addAsyncAction = (value, time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addAction(value))
    }, time * 1000)
  }
}

export const minusAsyncAction = (value, time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(minusAction(value))
    }, time * 1000)
  }
}
