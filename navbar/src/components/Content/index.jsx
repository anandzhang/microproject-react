import React from 'react'
import { useParams } from 'react-router-dom'

export default function () {
  let { detail } = useParams()
  return <div>{detail}</div>
}