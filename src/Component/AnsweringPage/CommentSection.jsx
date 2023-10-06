import React from 'react'
import User from '../../Assets/ans-user.png';
import Msg from '../../Assets/msg.svg';
const CommentSection = () => {
  return (
    <div className="comment-cover">
        <div className="cmt-flex">
        <h5>21 Comments</h5>
        <p>view 21 comments</p>
        </div>
        
        <div className='comment-flex'>
            <img src= {User} alt="" />
            <div className='send-msg'>
                <input type="text"  placeholder='Add a comment, @ to mention'/>
            </div>
            <div className='msg-arrow'>
            <img  src={Msg} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default CommentSection