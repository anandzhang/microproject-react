import React, { useEffect, useRef, Fragment } from 'react'
import { loadingMoviesAction } from '../store/actions'
import { requestMovies, requestTags } from '../api/Douban'

export default function Search(props) {
  const tag = useRef()
  const { dispatch, tags, loading } = props

  // 第二个参数使用[]，欺骗React来模拟类组件的componentDidMount
  useEffect(() => {
    requestMovies(dispatch, tag.current.value)
    requestTags(dispatch)
  }, [])

  const searchMovies = () => {
    dispatch(loadingMoviesAction())
    requestMovies(dispatch, tag.current.value)
  }

  const showMoreTags = e => {
    const tagsDOM = e.target.previousElementSibling
    const toggleResult = tagsDOM.classList.toggle('visible')
    if (toggleResult) {
      e.target.innerText = '收起'
    } else {
      e.target.innerText = '更多'
    }
  }

  const useProvidedTag = e => {
    const { tagName, innerText } = e.target
    if (tagName.toLowerCase() === 'li') {
      tag.current.value = innerText
      searchMovies()
    }
  }

  const renderTags = () => {
    if (loading.tags) {
      return <p>正在加载标签....</p>
    } else {
      return renderList()
    }
  }

  const renderList = () => (
    <Fragment>
      <ul className='tags-list' onClick={useProvidedTag}>
        {
          tags.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <div className='more' onClick={showMoreTags}>更多</div>
    </Fragment>
  )

  return (
    <div className='search'>
      <div className='search-bar'>
        <input type='text' defaultValue='热门' ref={tag} />
        <div className='btn' onClick={searchMovies}>搜索</div>
      </div>
      <div className='search-tags'>{renderTags()}</div>
    </div>
  )
}
