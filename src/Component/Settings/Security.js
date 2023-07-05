import React from 'react'
import Search from '../../Assets/search.svg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
import myDetails from '../../Assets/my-details.png'

function Security({theme, setTheme}) {
  return (
    <div>
    <div className='home' id = {theme}>
    <MenuBar theme = {theme} setTheme = {setTheme}/> 



<div className='home-container'>
<TopNavBar theme = {theme}/>
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
   <div className='my-details'><p>Security</p></div>
   <div className='social-profile-sec'>
       
       <div className='prof-desc-sec'>
       <h1>Privacy</h1>
       <div>
        <div className='square-wrap'><div className='square'></div><p> Make my profile private</p></div>
        <div className='square-wrap'><div className='square'></div><p> include my email in Profile</p></div>
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

export default Security