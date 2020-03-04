import React from 'react'
import MovieItem from './MovieItem'

export default function MovieList(props) {
  console.log(props.state)
  const { movies, loading } = props.state
  return (
    <div>
      {
        loading.movies ? '正在加载...' :
          <ul>{movies.map((item, index) => <MovieItem key={index} item={item} />)}</ul>
      }
    </div>
  )
}
