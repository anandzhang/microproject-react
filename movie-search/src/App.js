import React, { Fragment } from 'react'
import Search from './components/Search'
import MovieList from './components/MovieList'
import './App.css'


export default function () {
  return (
    <Fragment>
      <div className='container'>
        <h1 className='title'>电影搜索</h1>
        <Search />
      </div>
      <MovieList />
    </Fragment>
  )
}
