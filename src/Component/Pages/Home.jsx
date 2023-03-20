import React from 'react'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import SideBar from '../SideBar'
import homeIcon from '../../Assets/homeIcon.svg'

function Home() {
  return (
    <>
      <div className="home">
        {/* <div className="menu-bar">
          <div className="menu-header">
            <button className="hamburger">
              <div className='bar-1'></div>
              <div className='bar-2'></div>
              <div className='bar-3'></div>
            </button>
            <Logo/>
          </div>
          <div className="modes">
            <button className="light-mode"><img src={lightIcon} alt=""/>Light</button>
            <button className="dark-mode"><img src={DarkIcon} alt=""/>Dark</button>
          </div>
          <button className='log-out-btn'><img src={logoutIcon} alt="" /> logout</button>
        </div> */}
        <MenuBar>
          <div className="menu-bar-link">
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Home</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Explore</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>CK Originals</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Bookmarks</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Your Content</p></Link>
          </div>
        </MenuBar>
        <div className="home-container">
        
        </div>

        {/* <div className="side-bar">
          <div className="side-bar-header">
            <button className="upload-btn"><img src={uploadIcon} alt=""/><p>Upload</p><i className="arrow down"></i></button>
            <button className="notification"> <i className="notification-dot"></i> <img src={bellIconBlue} alt="" /></button>
            <div className="setting">
              <div className="profile-sm">
                <img src={ProfileSmall} alt="" />
              </div>
            </div>
          </div>

          <div className="box-1"></div>
          <div className="ad-box-1"></div>
          <div className="side-bar-footer">
            <div className="side-bar-footer-container-1">
              <Link className='side-bar-footer-link'>About</Link>
              <Link className='side-bar-footer-link'>Terms and Condition</Link>
              <Link className='side-bar-footer-link'>Privacy Policy</Link>
              <Link className='side-bar-footer-link'>Cookie Policy</Link>
            </div>
            <div className="side-bar-footer-container-2">	&#169; 2023 CracKube</div>

          </div>
        </div> */}

        <SideBar></SideBar>
      </div>
    </>
  )
}

export default Home