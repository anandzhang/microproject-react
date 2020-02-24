import React, { Fragment, Component } from 'react'
import Search from './components/Search'
import MovieList from './components/MovieList'
import './App.css'

// 使用 子传父-父传子 完成兄弟传值
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTag: '热门'
    }
  }

  getSearchTag = searchTag => this.setState({ searchTag })

  render() {
    return (
      <Fragment>
        <div className='container'>
          <h1 className='title'>电影搜索</h1>
          <Search getSearchTag={this.getSearchTag} />
        </div>
        <MovieList searchTag={this.state.searchTag} />
      </Fragment>
    )
  }
}
