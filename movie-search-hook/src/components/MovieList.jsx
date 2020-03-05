import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import { requestMovies, defaultPageLimit } from '../api/Douban'

export default function MovieList(props) {
  const { dispatch, movies, loading, currentTag } = props
  const [pageStart, setPageStart] = useState(0)

  useEffect(() => {
    const params = {
      tag: currentTag,
      pageStart
    }
    requestMovies(dispatch, params)
  }, [currentTag, pageStart])

  const previousPage = () => setPageStart(pageStart - defaultPageLimit)
  const nextPage = () => setPageStart(pageStart + defaultPageLimit)

  const renderMovies = () => {
    if (loading.movies) {
      return <p className='loading-movies'>正在加载电影....</p>
    } else {
      return (
        <ul className='movies-list'>
          {
            movies.map((item, index) => <MovieItem key={index} item={item} />)
          }
        </ul>
      )
    }
  }

  return (
    <div>
      {renderMovies()}
      <div className='pagination'>
        <button onClick={previousPage} disabled={!Boolean(pageStart)}>&lt;</button>
        <button onClick={nextPage}>&gt;</button>
      </div>
    </div>
  )
}
