import React from 'react'
import MovieItem from './MovieItem'

export default function MovieList(props) {
  const { movies, loading } = props

  const renderMovies = () => {
    if (loading.movies) {
      return <p className='loading-movies'>正在加载电影....</p>
    } else {
      return renderList()
    }
  }

  const renderList = () => (
    <ul className='movies-list'>
      {
        movies.map((item, index) => <MovieItem key={index} item={item} />)
      }
    </ul>
  )

  return <div>{renderMovies()}</div>
}
