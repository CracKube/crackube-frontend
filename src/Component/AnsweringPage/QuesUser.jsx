import React from 'react'
import User from '../../Assets/ans-user.png';
import BookMark from '../../Assets/bookmark.png'
import RedFlag from '../../Assets/red-flag.png';
import verify from '../../Assets/Verify.svg';

function AnsUser({theme, answer}) {
  return (
    <div className='ans-whole-wrap'> 
    <div className='ans-user'>
                <div>
                    <img className='question-user-prof' src= {User}/>
                </div>
                <div>
                    <div className='ques-auth-flex'>
                    <div className='auth-ques-name'>{answer && answer.userPosted.name}</div>
                    <img src= {verify} alt="" />
                    </div>
                    
                    <div className='user-ans-id'>@jennifermargreed</div>
                </div>
                </div>    
                <div>
                <div className='bk-btn-wrap'>
                    <img src={BookMark} alt="" />
                    <div className='btn-rep'>
                    <div>
                    
                    <button className='red-flag'> <img  src= {RedFlag} alt="" />Report</button>
                    </div>
                    
                    </div>
                    
                </div>
                </div>
                
            </div>
  )
}

export default AnsUser