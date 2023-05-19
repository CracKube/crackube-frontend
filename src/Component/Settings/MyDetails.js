import React from 'react'
import Search from '../../Assets/search.svg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
import myDetails from '../../Assets/my-details.png'

function MyDetails() {
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
   <div className='my-details'><p>My Details</p></div>
   <div className='social-profile'>
       <div className='prof-cover'>
       <p>Social Profile</p>
       <div className='img-div'>
           <img src={myDetails} alt="" />
           <p>@jamescooper</p>
       </div>
       </div>
       <div className='prof-desc'>
           <p> Writer. #MarieTV. Fancy Dancer. Named by Oprah "Thought leader for next generation"<br />
           🎧 Learn to get *anything* you want. <br />
           Free download <br />
           marieforleo.com/blog</p>
           </div>
    </div>

<div className='about-you'>
   <p>About You</p>
   <div className='personal-details'>
   <div>
   <div className='person-name'>
       <p>First Name</p>
       <h2>James</h2>
   </div>
   <div>
       <p>Gender</p>
       <h2>Male</h2>
   </div>
   </div>
   <div className='last-det'>
   <div className='person-name'>
       <p>Last Name</p>
       <h2>Cooper</h2>
   </div>
   <div>
       <p>Gender</p>
       <h2>Male</h2>
   </div>
   </div>
   </div>

</div>
<div className='about-you'>
   <p>Address</p>
   <div className='personal-details'>
   <div>
   <div className='person-name'>
       <p>Country</p>
       <h2>India</h2>
   </div>
   <div>
       <p>State</p>
       <h2>Tamil Nadu</h2>
   </div>
   </div>
   <div className='last-det'>
   <div className='person-name'>
       <p>City</p>
       <h2>Chennai</h2>
   </div>
   <div>
       <p>Postal Code</p>
       <h2>610999</h2>
   </div>
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


export default MyDetails