import React, { Component, Fragment } from 'react'
import './index.css'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: []
    }
    this.search = React.createRef()
  }

  componentDidMount() {
    fetch('/api/j/search_tags')
      .then(res => res.json())
      .then(data => this.setState({ tags: data.tags }))
  }

  handleSearch = () => this.props.getSearchTag(this.search.current.value)

  sendSearchTag = e => this.props.getSearchTag(e.target.innerText)

  renderTags = (tags) => {
    if (tags && tags.length) {
      return tags.map((item, index) => {
        return (
          <li key={index} onClick={this.sendSearchTag}>{item}</li>
        )
      })
    }
    return <li>Loading</li>
  }

  render() {
    const { tags } = this.state
    return (
      <Fragment>
        <div className='search'>
          <input type="text" ref={this.search} />
          <button onClick={this.handleSearch}>搜索</button>
        </div>
        <ul className='tags'>{this.renderTags(tags)}</ul>
      </Fragment>
    )
  }
}
