
import React from 'react'
import { Link } from 'react-router-dom'
function TrendTag({tagName}) {
  return (
    <>
        <Link to='/' className="trend-tag"><p>{tagName}</p></Link>
    </>
  )
}

export default TrendTag