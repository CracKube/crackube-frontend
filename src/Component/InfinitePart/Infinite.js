import React from 'react'

function Infinite() {
  return (
    <div>
    <div className='Recommend'>
        <p className='reco'>Recommended Ones!</p>
        <p className='ans'>Answer</p>
        <div className='toggle'>
          <div className='toggler'></div>
        </div>
        <p className='blog'>Blog</p>


    </div>
      <div className='priority'>
        <div><button className='foru'>For You</button></div>
        <div><button className='prob'>Probability</button></div>
        <div><button className='news'>Latest News</button></div>
      </div>
    </div>
  )
}

export default Infinite