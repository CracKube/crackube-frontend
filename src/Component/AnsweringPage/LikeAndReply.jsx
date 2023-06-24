import React, { useState } from 'react'
import Like from '../../Assets/like-button.png';
import Dislike from '../../Assets/dislike-button.png';
import Flags from '../../Assets/flags.png';
function LikeAndReply(prop) {
    const [like, setLike]  = useState(0);
    const [dislike, setDislike] = useState(0);

    const handleLike = () => {
        if(dislike > 0) {
            setDislike(dislike - 1);
            setLike(like + 1)
            return;
        }
        if(like >= 1){
            setLike(like - 1);
        }else {
            setLike(like + 1);
        }     
    }
    const handleDislike = () => {
        if(like > 0) {
            setLike(like - 1);
            setDislike(dislike + 1);
            return;
        }
        if(dislike >= 1){
            setDislike(dislike - 1);
        }else {
            setDislike(dislike + 1);
        }
}
  return (
    <div className='whole-cover'>
        <div className='likes-cover'>
            <div>
                <img src= {Like}
                onClick={handleLike}
                 alt=""/>
            </div>
            <div>{like}</div>
            <div>
            <div className='likes-sep'></div>
            </div>
            
            <div>
                <img src= {Dislike} alt=""
                onClick={handleDislike} />
            </div>
            <div>{dislike}</div>
        </div>
        <div className='flag-wrap'>
            <div className='rep-but'><button>Reply</button></div>
            
            <img src= {Flags} alt="" />
        </div>
    </div>
  )
}

export default LikeAndReply;