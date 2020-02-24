import React, { Component } from 'react'
import './index.css'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTag: this.props.searchTag,
      movies: []
    }
  }

  getMovies = searchTag => {
    fetch(`/api/j/search_subjects?tag=${searchTag}`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.subjects }))
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.getMovies(nextProps.searchTag)
  }

  componentDidMount() {
    this.getMovies(this.state.searchTag)
  }

  renderMovies = (movies) => {
    if (movies && movies.length) {
      return movies.map((item, index) => {
        return (
          <li key={index}>
            <img className="poster" src={item.cover} alt={item.title} />
            <p className='info'>
              <a href={item.url}>{item.title}</a>
              <span className='rate'>{item.rate}</span>
            </p>
          </li>
        )
      })
    }
    return <li>Loading</li>
  }

  render() {
    const { movies } = this.state
    return <ul className='movie-list'>{this.renderMovies(movies)}</ul>
  }
}
