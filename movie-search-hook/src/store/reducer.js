import ActionTypes from './action-types'

export const initState = {
  tags: [],
  movies: [],
  currentTag: '热门',
  loading: { tags: true, movies: true }
}

export const reducer = (state, action) => {
  const { tags, movies, currentTag, loading } = state
  const { type, data } = action
  switch (type) {
    case ActionTypes.LoadingMovies:
      loading.movies = true
      return { tags, movies: [], currentTag, loading }

    case ActionTypes.SaveTags:
      loading.tags = false
      return { tags: data, movies, currentTag, loading }

    case ActionTypes.SaveMovies:
      loading.movies = false
      return { tags, movies: data, currentTag, loading }

    case ActionTypes.SaveCurrentTag:
      loading.movies = true
      return { tags, movies, currentTag: data, loading }

    default:
      return state
  }
}