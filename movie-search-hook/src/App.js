import React, { Fragment, useReducer } from 'react'
import { initState, reducer } from './store/reducer'
import Search from './components/Search'
import MovieList from './components/MovieList'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { tags, movies, loading } = state
  return (
    <Fragment>
      <h1>电影搜索</h1>
      <Search dispatch={dispatch} tags={tags} loading={loading} />
      <MovieList movies={movies} loading={loading} />
    </Fragment>
  )
}
