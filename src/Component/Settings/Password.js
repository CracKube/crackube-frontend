import React from 'react'
import Search from '../../Assets/search.svg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'

function Password({theme, setTheme}) {
  return (
    <div>
    <div className='home' id = {theme}>
    <MenuBar theme = {theme} setTheme = {setTheme}/> 



<div className='home-container'>
<TopNavBar theme= {theme}/>
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
   <div className='my-details'><p>Password</p></div>
   <div className='social-profile-sec'>
       
       <div className='prof-desc-sec'>
       <div>
        <p>We will send a verification link to danielcooper@gmail.com. This update will not take place until you follow the <br /> instructions listed in that email. <br />
If you do not have access to danielcooper@gmail.com, please contact support for assistance.</p>
        </div>
        <div><button>Reset Password</button></div>
        
       </div>
    </div>
    </div>

</div>

</div>


</div>
</div>
  )
}

export default Password