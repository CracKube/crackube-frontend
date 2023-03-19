import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import Logo from './Logo'

function Navbar() {
    return (
        <>
            <div className="nav-bar">
                <Logo/>
                <ul>
                    <li><NavLink className={'nav-link'}>Home</NavLink></li>
                    <li><NavLink className={'nav-link'}>Search</NavLink></li>
                    <li><NavLink className={'nav-link'}>Features</NavLink></li>
                    <li><NavLink className={'nav-link'}>About Us</NavLink></li>
                </ul>
                <div className="nav-buttons">
                    <Link to='/signup'><button className="sign-up-btn">Sign Up</button></Link>
                    <Link to='/login'><button className="login-in-btn">Sign In</button></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar