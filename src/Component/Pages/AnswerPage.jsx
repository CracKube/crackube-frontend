import React from 'react'
import MenuBar from '../MenuBar'
import { Heading, TopNavBar } from '../Constants'
import AnswerList from '../AnswerListComponents/AnswerList'

function AnswerPage() {
  return (
    <>
      <div className="answer">
        <MenuBar/>
        <div className="answer-container">
          <TopNavBar/>
          <p className="answer-heading">Choose the Best for You</p>
          <div className='priority'>
            <div><button className='foru'>For You</button></div>
            <div><button className='priority-btn'>Most Recent</button></div>
            <div><button className='priority-btn'>Highest Price</button></div>
            <div><button className='priority-btn'>lowest Price</button></div>
            <div><button className='priority-btn'>Oldest Ones</button></div>
            <div><button className='priority-btn'>Fewest Answers</button></div>
            <div><button className='priority-btn'>Most Answers</button></div>
          </div>
          <AnswerList/>
        </div>
      </div>
    </>
  )
}

export default AnswerPage