import React from 'react'
import User from '../../Assets/ans-user.png';
import BookMark from '../../Assets/bookmark.png'
import RedFlag from '../../Assets/red-flag.png';

  
  function Author({img, name, user}) {
    return (
        <div className='ans-whole-wrap-1'> 
        <div className='ans-user'>
                    <div>
                        <img src= {img}/>
                    </div>
                    <div>
                        <div>{name}</div>
                        <div className='user-ans-id'>@{user}</div>
                    </div>
                    </div>    
                    <div>
                    <div className='bk-btn-wrap'>
                        
                        
                    </div>
                    </div>
                    
                </div>
      )
  }
  
  export default Author