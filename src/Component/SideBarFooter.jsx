import React from 'react'
import { Link } from 'react-router-dom'
function SideBarFooter() {
  return (
    <>
        <div className="side-bar-footer">
            <div className="side-bar-footer-container-1">
              <Link className='side-bar-footer-link'>About</Link>
              <Link className='side-bar-footer-link'>Terms and Condition</Link>
              <Link className='side-bar-footer-link'>Privacy Policy</Link>
              <Link className='side-bar-footer-link'>Cookie Policy</Link>
            </div>
            <div className="side-bar-footer-container-2">	&#169; 2023 CracKube</div>
          </div>
    </>
  )
}

export default SideBarFooter