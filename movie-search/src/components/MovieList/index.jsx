import React, { Component } from 'react'
import './index.css'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  UNSAFE_componentWillMount() {
    fetch('/api/j/search_subjects?tag=热门')
      .then(res => res.json())
      .then(data => this.setState({ movies: data.subjects }))
  }

  render() {
    console.log('Render List')
    const { movies } = this.state
    return (
      <ul className='movie-list'>
        {
          movies.map((item, index) => {
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
      </ul>
    )
  }
}
