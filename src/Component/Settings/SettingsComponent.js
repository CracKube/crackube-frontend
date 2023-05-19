import React from 'react'
import { Link } from 'react-router-dom'
function SettingsComponent() {
  return (
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
                <Link to= "/delete-account"><span>Delete Account</span> </Link>

            </ul>
            <div className='bar'>

            </div>
        </div>
        
    </div>
  )
}



export default SettingsComponent