import React, { useEffect, useRef } from 'react'
import { loadingMoviesAction, saveMoviesAction } from '../store/actions'
import { requestMovies } from '../api/Douban'

export default function Search(props) {
  const tag = useRef()
  const { dispatch } = props

  // 第二个参数使用[]，欺骗React来模拟类组件的componentDidMount
  useEffect(() => {
    requestMovies(dispatch, tag.current.value)
  }, [])

  const searchMovies = () => requestMovies(dispatch, tag.current.value)

  return (
    <div>
      <input type='text' defaultValue='热门' ref={tag} />
      <button onClick={searchMovies}>搜索</button>

    </div>
  )
}
