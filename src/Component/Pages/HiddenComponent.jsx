import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../../Assets/homeIcon.svg'
import Explore from '../../Assets/Explore.svg'
import Ck from '../../Assets/CK.svg'
import Den from '../../Assets/Den.svg'
const HiddenComponent = () => {
  return (
    <div className='bot-nav-cover'>
        <div>
            <img src={homeIcon} alt="" />
            <Link to= '/home'><p>Home</p></Link>
        </div>
        <div>
            <img src={Explore} alt="" />
            <Link to= '/search'><p>Explore</p></Link>
        </div>
        <div>
            <img src={Ck} alt="" />
            <Link to = '/'><p>Origins</p></Link>
        </div>
        <div>
            <img src={Ck} alt="" />
            <Link to = '/'><p>Notifications</p></Link>
        </div>
        <div>
            <img src={Den} alt="" />
            <Link to = '/'><p>Your Den</p></Link>
        </div>

    </div>
  )
}

export default HiddenComponent;