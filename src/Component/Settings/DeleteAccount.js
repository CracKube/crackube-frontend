import React from 'react'
import Search from '../../Assets/search.svg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
import myDetails from '../../Assets/my-details.png'

function DeleteAccount() {
  return (
    <div>
    <div className='home'>

<MenuBar>
<div className="menu-bar-link">
 <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Home</p></Link>
 <Link to='/search' className="menu-btn"><img src={homeIcon} alt=""/><p>Explore</p></Link>
 <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>CK Originals</p></Link>
 <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Bookmarks</p></Link>
 <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Your Content</p></Link>
</div>
</MenuBar>



<div className='home-container'>
<TopNavBar></TopNavBar>
<div className='set-cover'>
<div className='settings-cover'>
   <p>Settings</p>
   <div className='list'>
       <ul>
           <Link to="/my-details">My Details</Link>
           <Link to="/security">Security</Link>
           <Link to="/email">Email</Link>
           <Link to="/password">Password</Link>
           <Link to="/notification">Notification</Link>
           <Link to="/language">Language</Link>
           <Link to="/payment">Payment Method</Link> 
           <Link to = "/delete-account"><span>Delete Account</span> </Link>

       </ul>
       <div className='bar'>

       </div>
   </div>
   
   
</div>
<div className='about-sep'>
   <div className='my-details'><p>Delete Account</p></div>
   <div className='social-del-profile'>
       
       <div className='prof-desc-del'>
       <h1>Deactivate Account</h1>
       
       <div className='del-manage'>
       <p>Deactivating your account will cause your profile and listings to disappear, and you will not receive any <br /> notifications from us. This can be undone later.</p>
       <div className='de-acc'><button>Deactivate Account</button></div> 
       <h1>Delete Account</h1>
       <p>Deleting your account is permanent. When you delete your account, you won't be able to retrieve your content.</p>
       <div className='del-acc'><button>Delete Account</button></div> 
        
        </div>
        
           </div>
           
    </div>
    </div>

</div>



</div>
</div>
</div>
  )
}

export default DeleteAccount