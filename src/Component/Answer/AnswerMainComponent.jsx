import React from 'react'
import { TopNavBar } from '../Constants'
const AnswerMainComponent = ({theme}) => {
  return (
    <div className="home-container">
          <TopNavBar theme = {theme}/>
          <div>
            <p>Answer Component</p>
          </div>
    </div>
  )
}

export default AnswerMainComponent