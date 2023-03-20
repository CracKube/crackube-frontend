import React from 'react'
import { Link } from 'react-router-dom'
import uploadIcon from '../Assets/uploadIcon.svg'
import bellIconBlue from '../Assets/bellIconBlue.svg'
import ProfileSmall from '../Assets/ProfileSmall.svg'
function SideBar({children}) {
  return (
    <div className="side-bar">
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
    </div>
  )
}

export default SideBar