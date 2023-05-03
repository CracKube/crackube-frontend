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
        <div><button className='priority-btn'>Probability</button></div>
        <div><button className='priority-btn'>Latest News</button></div>
      </div>
    </div>
  )
}

export default Infinite