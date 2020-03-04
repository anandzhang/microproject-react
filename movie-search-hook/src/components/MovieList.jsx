import React from 'react'
import MovieItem from './MovieItem'

export default function MovieList(props) {
  console.log(props)
  const { movies, loading } = props
  return (
    <div>
      {
        loading.movies ? '正在加载...' :
          <ul className='movies-list'>{movies.map((item, index) => <MovieItem key={index} item={item} />)}</ul>
      }
    </div>
  )
}
