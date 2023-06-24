import React from 'react'
import Profile from '../../Assets/background.png';
import League from '../../Assets/league.png';
import DP from '../../Assets/dp.png';
function ProfileComponent() {
  return (
    <div className='flex-prof'>
        <div className='imgs'>
            <img  className='img-wrap' src={Profile} />
            <div className='sub-prof'>
            <img  className='img-wrap1' src={League}/>
            <h1>Diamond</h1>
            <p>1,244 CK</p>
            </div>
            <div className='sec-user-bar'>

            </div>
            
        </div>
        <div className='dp'>
            <img className='dp-img' src= {DP}/>
            <p className='user-prof-cover'>James Cooper</p>
            <p className='user-name'>@jamescooper</p>
            <div className='user-flw-btn'>
            <button >Follow</button>
            </div>
            
            <div className='user-data'>
                <div className='fit'>
                    <p>1.2k</p>
                    <p>Answers</p>
                </div>
                <div className='user-sep-bar'></div>
                <div className='fit'>
                    <p>1.7k</p>
                    <p>Blogs</p>
                </div>
                <div className='user-sep-bar'></div>
                <div className='fit'>
                    <p>1.7m</p>
                    <p>Followers</p>
                </div>
                <div className='user-sep-bar'></div>
                <div className='fit'>
                    <p>701</p>
                    <p>following</p>
                </div>
            </div>
            <p className='user-desc'>Writer. #MarieTV. Fancy Dancer. <br />
            🎧 Learn to get anything you want. <br />
            Free download <br />
            marieforleo.com/blog <br />

            <strong>New Jersey, USA</strong>
            </p>

        </div>
        
        </div>
  )
}

export default ProfileComponent