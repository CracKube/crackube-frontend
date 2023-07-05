import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
import AnsUser from './AnsUser'
import LikeAndReply from './LikeAndReply'
import Answer from '../../Assets/Answer.png'
import QuestionUser from './QuestionUser'
import QuesUser from './QuesUser'

function AnsweringPage({theme, setTheme}) {
  
  return (
    <div className='home' id = {theme}>

    <MenuBar theme = {theme} setTheme = {setTheme}/> 
      <div className='home-container'>
        <TopNavBar theme = {theme}/>
        <div className='ans-line-1' id = {theme}>
           <QuestionUser id = {theme}></QuestionUser>
            <div className='ans-line' id = {theme}></div>
            <h1>2 Answers</h1>
            <div className='ans-holder'>
            <div className='ans-users'>
                <div className='ans-container'>
                    <AnsUser></AnsUser>
                    <p>
                            Possible Data Inconsistencies:
                            In this scenario, two persons are simultaneously performing reservation and cancellation without synchronization. This may result in the following data inconsistencies:
                            Race condition: There can be a situation where both Mr. Amal and Ms. Githal try to book/cancel the same ticket simultaneously, and the result of the operation depends on which operation finishes first. This can lead to incorrect booking/cancellation status of the ticket.</p>

                    <LikeAndReply></LikeAndReply>        
                </div>
                
            </div>
            </div>
            <div className='ans-holder'>
            <div className='ans-users'>
                <div className='ans-container'>
                    <AnsUser></AnsUser>
                    <div className='img-handle'>
                        <img src= {Answer} alt="" />
                    </div>
                    <p>
                    Possible Data Inconsistencies: transcribecd q
In this scenario, two persons are simultaneously performing reservation and cancellation without synchronization. This may result in the following data inconsistencies:
Race condition: There can be a situation where both Mr. Amal and Ms. Githal try to book/cancel the same ticket simultaneously, and the result of the operation depends on which operation finishes first. This can lead to incorrect booking/cancellation status of the ticket.
                    </p>
                    <p>
                    Possible Data Inconsistencies:
In this scenario, two persons are simultaneously performing reservation and cancellation without synchronization. This may result in the following data inconsistencies:
Race condition: There can be a situation where both Mr. Amal and Ms. Githal try to book/cancel the same ticket simultaneously, and the result of the operation depends on which operation finishes first. This can lead to incorrect booking/cancellation status of the ticket.
                    </p>

                    <LikeAndReply></LikeAndReply>        
                </div>
                
            </div>
            </div>
          
        </div>
   
        
      </div>
    </div>
  )
}

export default AnsweringPage