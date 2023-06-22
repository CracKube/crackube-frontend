import React from 'react'
import User from '../../Assets/ans-user.png';
import BookMark from '../../Assets/bookmark.png'
import RedFlag from '../../Assets/red-flag.png';
function AnsUser() {
  return (
    <div className='ans-whole-wrap'> 
    <div className='ans-user'>
                <div>
                    <img src= {User}/>
                </div>
                <div>
                    <div>Jennifer Margrete</div>
                    <div className='user-ans-id'>@jennifermargreed</div>
                </div>
                <div>
                    <button>Follow</button>
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