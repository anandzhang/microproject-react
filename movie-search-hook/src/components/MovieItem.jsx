import React from 'react'

export default function MovieItem(props) {
  const { title, cover, rate } = props.item
  return (
    <li>
      <p>{title}</p>
      <img src={cover} alt={title} referrerPolicy='no-referrer' />
      <p>{rate}</p>
    </li>
  )
}
