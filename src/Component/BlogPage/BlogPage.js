import React from 'react'
import Search from '../../Assets/search.svg'
import { Link, useParams } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
import blogPic from '../../Assets/blogPic.svg';
import Profile from './Profile';
import { authorUrl } from '../Constants.jsx'
import { useEffect } from 'react'
import moment from 'moment'


function BlogPage() {
  const id = useParams().id;
  const [blog, setBlog] = React.useState({});

  const getBlog = async () => {
    const response = await fetch(`https://crackube-backend-test.onrender.com/blogs/get/${id}`)
    const data = await response.json();
    setBlog(data);
  }
  useEffect(() => {
    getBlog();
  }, []);

  if (!blog) return (<div>Loading...</div>)

  return (
    <div className='home'>

      <MenuBar>
        <div className="menu-bar-link">
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Home</p></Link>
          <Link to='/search' className="menu-btn"><img src={homeIcon} alt="" /><p>Explore</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>CK Originals</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Bookmarks</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Your Content</p></Link>
        </div>
      </MenuBar>



      <div className='home-container'>
        <TopNavBar></TopNavBar>
        <div className='blog-cover'>
          <div className='blog-container'>

            <img src={blog && `data:image/png;base64,${blog.blogImage}` || blogPic} alt="" />
          </div>
          <div className='blog-title'>
            <p>{blog && blog.blogTitle} </p>
          </div>
          <div className='prof'>
            <Profile author={blog && blog.userPosted} modified={blog && moment(blog.postedOn).fromNow()} url={authorUrl} />
          </div>
          <div>
            <p className='blog-content'>
              {blog && blog.blogBody}
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BlogPage