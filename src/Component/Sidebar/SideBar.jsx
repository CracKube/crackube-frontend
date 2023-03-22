import React from 'react'

import uploadIcon from '../../Assets/uploadIcon.svg'
import bellIconBlue from '../../Assets/bellIconBlue.svg'
import ProfileSmall from '../../Assets/ProfileSmall.svg'
import SideBarFooter from './SideBarFooter.jsx'
import TrendTagList from './TrendTag.jsx'
import PeopleList from './PeopleList.jsx'
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

          <div className="box-1">
            <h4>Trending</h4>
            <TrendTagList/>
            <h4>Top People to Follow</h4>
            <PeopleList/>
          </div>
          <div className="ad-box-1">
            
          </div>
          <SideBarFooter/>
    </div>
  )
}

export default SideBar