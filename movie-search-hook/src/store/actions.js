import ActionTypes from './action-types'

export const loadingTagsAction = () => ({ type: ActionTypes.LoadingTags })
export const loadingMoviesAction = () => ({ type: ActionTypes.LoadingMovies })
export const saveTagsAction = (tags) => ({
  type: ActionTypes.SaveTags,
  data: tags
})
export const saveMoviesAction = (movies) => ({
  type: ActionTypes.SaveMovies,
  data: movies
})