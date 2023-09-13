import React from 'react'
import Search from '../../Assets/search.svg'

const SearchResult =({result})=> {
    return (
    <div className='search-result'>
      
      <img className='search-list-icon'src= {Search} alt="img" />
      {
        result.length > 50 ? <p>{result.slice(0,50)}...</p> : <p>{result}</p>
      }
  </div>
    )
  
  }

export default SearchResult