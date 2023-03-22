import React from 'react'
import { Link } from 'react-router-dom'
function TrendTag({tagName}) {
  return (
    <>
        <li><Link to='/' className="trend-tag">{tagName}</Link></li>
    </>
  )
}

export default TrendTag