import React, { useEffect, useRef } from 'react'
import { loadingMoviesAction, saveMoviesAction } from '../store/actions'
import { requestMovies, requestTags } from '../api/Douban'

export default function Search(props) {
  const tag = useRef()
  const { dispatch, tags } = props

  // 第二个参数使用[]，欺骗React来模拟类组件的componentDidMount
  useEffect(() => {
    requestMovies(dispatch, tag.current.value)
    requestTags(dispatch)
  }, [])

  const searchMovies = () => requestMovies(dispatch, tag.current.value)

  const showMoreTags = e => {
    const tagsDOM = e.target.previousElementSibling
    const toggleResult = tagsDOM.classList.toggle('visible')
    if (toggleResult) {
      e.target.innerText = '收起'
    } else {
      e.target.innerText = '更多'
    }
  }

  const selectTag = e => {
    const { tagName, innerText } = e.target
    if (tagName.toLowerCase() === 'li') {
      tag.current.value = innerText
      searchMovies()
    }
  }

  return (
    <div className='search'>
      <input type='text' defaultValue='热门' ref={tag} />
      <button onClick={searchMovies}>搜索</button>
      <ul className='tags-list' onClick={selectTag}>
        {
          tags.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <div className='more' onClick={showMoreTags}>更多</div>
    </div>
  )
}
