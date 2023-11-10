import React from 'react'
import Search from '../../Assets/search.svg'
import { Link, useParams } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
import ProfileComponent from './ProfileComponent'
import HiddenComponent from '../Pages/HiddenComponent'
import SharedComponents from '../SharedComponents'
function ProfilePage() {
  return (
    <SharedComponents>
      <ProfileComponent />
    </SharedComponents>
    
  )
}

export default ProfilePage