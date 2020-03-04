import React, { Fragment, useReducer, useEffect, useState } from 'react'
import { initState, reducer } from './store/reducer'
import Search from './components/Search'
import MovieList from './components/MovieList'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <Fragment>
      <h1>电影搜索</h1>
      <Search dispatch={dispatch} />
      <MovieList state={state} />
    </Fragment>
  )
}
