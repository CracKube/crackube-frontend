import React from 'react'
import Search from '../../Assets/search.svg'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
import blogPic from '../../Assets/blogPic.svg';
import Profile from './Profile';
import {authorUrl} from '../Constants.jsx'
function BlogPage(props) {
  return (
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
        <div className='blog-cover'>
        <div className='blog-container'>
       
          <img src={blogPic} alt="" />
        
        </div>
        <div className='blog-title'>
          <p >7 DISASTER THAT IS CAUSED CLIMATE THAT
             WILL LEAVE YOU SHOCKED</p>
        </div>
        <div className='prof'>
        <Profile author='Jennifer Margarette' modified='posted 8 hours ago' url={authorUrl}/>
        </div>
        <div>
        <p className='blog-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sapien id lacus venenatis molestie vel quis augue. Maecenas convallis eros enim, eu dapibus sem sodales eu. Sed lobortis dictum erat, vitae gravida tortor dignissim vel. Quisque finibus nisl dapibus ipsum aliquet tempus. Aenean sed efficitur velit, non convallis ex. Integer ac nulla sit amet magna hendrerit pulvinar vel vel lacus. Aliquam sodales sem sit amet erat laoreet, ullamcorper iaculis dolor tempor. Morbi imperdiet, sem sit amet volutpat blandit, tellus metus porttitor est, sed consectetur nisi mi et velit. Integer convallis massa in purus tristique scelerisque. Sed ultrices massa arcu, eu mollis nunc varius sed. Integer vel metus nulla.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sapien id lacus venenatis molestie vel quis augue. Maecenas convallis eros enim, eu dapibus sem sodales eu. Sed lobortis dictum erat, vitae gravida tortor dignissim vel. Quisque finibus nisl dapibus ipsum aliquet tempus. Aenean sed efficitur velit, non convallis ex. Integer ac nulla sit amet magna hendrerit pulvinar vel vel lacus. Aliquam sodales sem sit amet erat laoreet, ullamcorper iaculis dolor tempor. Morbi imperdiet, sem sit amet volutpat blandit, tellus metus porttitor est, sed consectetur nisi mi et velit. Integer convallis massa in purus tristique scelerisque. Sed ultrices massa arcu, eu mollis nunc varius sed. Integer vel metus nulla.</p>
        </div>
    </div>
    </div>
    </div>

  )
}

export default BlogPage