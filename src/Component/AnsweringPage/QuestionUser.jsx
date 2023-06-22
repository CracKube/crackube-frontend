import React from 'react'
import QuesUser from './QuesUser'
import Tags from './Tags'
function QuestionUser() {
  return (
    <div className='ans-line-wrap'>
    <div className='ans-line'></div>
    <h1>Question</h1>
    <p>There are 33 total tickets available in server. Now Mr. Amal wants to book 5 tickets and Ms. Githal wants to cancel 3 tickets at the same time. Two persons are doing Two persons are doing reservation and cancellation concurrently with out synchronization. So discuss the possible data inconsistency in this scenario with the help of appropriate pseudo code or program.Also provide any two solutions for this scenario to achieve data consistency. Write the solutions as Also discuss the constraints orpseudo code or program for this scenario and justify your answer. disadvantages of your suggested solutions and how will you overcome the same.</p>
   <QuesUser></QuesUser>
   <div>
    <Tags></Tags>
   </div>
    
    </div>
  )
}

export default QuestionUser