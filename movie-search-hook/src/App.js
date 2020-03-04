import React, { Fragment, useReducer, useEffect, useState } from 'react'
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
      <Search dispatch={dispatch} tags={tags} />
      <MovieList movies={movies} loading={loading} />
    </Fragment>
  )
}
