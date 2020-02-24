import React, { Component, Fragment } from 'react'
import './index.css'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTag: '热门',
      tags: []
    }
  }

  UNSAFE_componentWillMount() {
    fetch('/api/j/search_tags')
      .then(res => res.json())
      .then(data => this.setState({ tags: data.tags }))
  }
  
  render() {
    const { tags } = this.state
    return (
      <Fragment>
        <div className='search'>
          <input type="text" />
          <button>搜索</button>
        </div>
        <ul className='tags'>
          {
            tags.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}
