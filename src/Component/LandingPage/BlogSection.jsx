import React from 'react'
import './BlogSection.css'
import blogimg from '../../Assets/Blog_container.svg'

const BlogSection = () => {
  return (
    <div className='blog_main_div'>
      <div className='blog_animation_div blog_div_comm'>
        <img className='blogimg_left leftBlog' src={blogimg} alt='blogimg'/>
        <img className='blogimg_top topBlog' src={blogimg} alt='blogimg'/>
        <img className='blogimg_right rightBlog' src={blogimg} alt='blogimg'/>
      </div>
      <div className='blog_head_div blog_div_comm'>
        <h1 className='blog_head '>Blogs</h1>
      </div>
      <div className='blog_text_div blog_div_comm'>
        <p className='blog_text'>I don’t know what you <span>will do reading blogs</span> still we have this feature so you guys read and <span>we can earn</span> please understand that and use our website thank you</p>
      </div>
    </div>
  )
}

export default BlogSection
