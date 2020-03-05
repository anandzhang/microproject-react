import ActionTypes from './action-types'

export const initState = {
  tags: [],
  movies: [],
  loading: { tags: true, movies: true }
}

export const reducer = (state, action) => {
  const { tags, movies, loading } = state
  const { type, data } = action
  switch (type) {
    case ActionTypes.LoadingTags:
      loading.tags = true
      return { tags: [], movies, loading }
    case ActionTypes.LoadingMovies:
      loading.movies = true
      return { tags, movies: [], loading }
    case ActionTypes.SaveTags:
      loading.tags = false
      return { tags: data, movies, loading }
    case ActionTypes.SaveMovies:
      loading.movies = false
      return { tags, movies: data, loading }
    default:
      return state
  }
}