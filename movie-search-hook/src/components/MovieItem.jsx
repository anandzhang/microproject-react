import React from 'react'

export default function MovieItem(props) {
  const { title, cover, rate, url } = props.item
  return (
    <li>
      <img src={cover} alt={title} referrerPolicy='no-referrer' />
      <p>
        <a href={url}>{title}</a>
        <span className='rate'>{rate}</span>
      </p>
    </li>
  )
}
