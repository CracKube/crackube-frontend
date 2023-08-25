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


function BlogPage({theme, setTheme}) {
  const id = useParams().id;
  const [blog, setBlog] = React.useState({});
  console.log(blog.blogImage)
  const getBlog = async () => {
    const response = await fetch(`https://crackube-backend-test.onrender.com/blogs/get/${id}`)
    const data = await response.json();
    console.log(data);
    setBlog(data);
  }
  useEffect(() => {
    getBlog();
  }, []);

  if (!blog) return (<div>Loading...</div>)
else{
  return (
    <div className='home' id = {theme}>

      <MenuBar theme = {theme} setTheme = {setTheme}/> 



      <div className='home-container'>
      <TopNavBar theme = {theme}/>
        <div className='blog-cover'>
        
          <div className='blog-container'
          style={{backgroundColor : `${blog.blogImageColor}`}}>
          <img src={blog.blogImageUrl} alt="" />
            
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
  
}

export default BlogPage