import React from 'react'
import Profile from "./Profile";
import moment from 'moment/moment';
import CardBlog from './CardBlog';
import { authorUrl } from "../Constants.jsx";

const BlogComponent = ({blog, blogs, id}) => {
  return (
    <div className="blog-flex">
          <div className="blog-min">
            <div className="blog-cover">
              <div
                className="blog-container"
                style={{ backgroundColor: `${blog.blogImageColor}` }}
              >
                <img src={blog.blogImageUrl} alt="" />
              </div>
              <div className="blog-title">
                <h1>{blog && blog.blogTitle} </h1>
              </div>
            </div>
            <div className="prof">
              <Profile
              id = {id}
              saved = {blog && blog.bookmarks}
              count = {blog && blog.likes}
              authImg = {blog &&  blog.userPosted && blog.userPosted.profilePicUrl}
                author={blog && blog.userPosted && blog.userPosted.username}
                modified={blog && moment(blog.postedOn).fromNow()}
                url={authorUrl}
              />
            </div>
            <div>
              <p
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: `${blog.blogBody}` }}
              ></p>
            </div>
          </div>
          <div className="blog-right-bar">
            <div className="ad-bar">
              <h1>AD</h1>
            </div>
            { (
              blogs.map((blog, index) => (
                <CardBlog
                  theme={blog.theme}
                  key={index}
                  id={blog._id}
                  thumbnail={blog.blogImageUrl}
                  authorImage={blog.blogImageUrl}
                  title={blog.blogTitle}
                  author={blog.userPosted}
                  modified={blog.postedOn}
                  tags={blog.blogTags}
                />
              ))
            )}
          </div>
        </div>
  )
}

export default BlogComponent