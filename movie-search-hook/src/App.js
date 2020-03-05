import React, { Fragment, useReducer } from 'react'
import { initState, reducer } from './store/reducer'
import Search from './components/Search'
import MovieList from './components/MovieList'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { tags, movies, loading, currentTag } = state
  return (
    <Fragment>
      <h1>电影搜索</h1>
      <Search {...{ dispatch, tags, currentTag, loading }} />
      <MovieList {...{ dispatch, movies, currentTag, loading }} />
    </Fragment>
  )
}
