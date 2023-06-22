import React from 'react'
import Like from '../../Assets/like-button.png';
import Dislike from '../../Assets/dislike-button.png';
import Flags from '../../Assets/flags.png';
function LikeAndReply() {
  return (
    <div className='whole-cover'>
        <div className='likes-cover'>
            <div>
                <img src= {Like} alt="" />
            </div>
            <div>4k</div>
            <div>
            <div className='likes-sep'></div>
            </div>
            
            <div>
                <img src= {Dislike} alt="" />
            </div>
            <div>1k</div>
        </div>
        <div className='flag-wrap'>
            <div className='rep-but'><button>Reply</button></div>
            
            <img src= {Flags} alt="" />
        </div>
    </div>
  )
}

export default LikeAndReply;