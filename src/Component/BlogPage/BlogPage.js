import React from "react";
import Search from "../../Assets/search.svg";
import { Link, useParams } from "react-router-dom";
import MenuBar from "../MenuBar";
import { MainBar, TopNavBar } from "../Constants";
import homeIcon from "../../Assets/homeIcon.svg";
import blogPic from "../../Assets/blogPic.svg";
import Profile from "./Profile";
import { authorUrl } from "../Constants.jsx";
import { useEffect } from "react";
import moment from "moment";
import CardBlog from './CardBlog';

function BlogPage({ theme, setTheme }) {
  const id = useParams().id;
  const [blog, setBlog] = React.useState({});
  const [blogs, setBlogs] = React.useState([]);

  const getBlog = async () => {
    const response = await fetch(
      `https://crackube-backend-test.onrender.com/blogs/get/${id}`
    );
    const data = await response.json();
    setBlog(data);
    console.log(data)
  };
  const getAllBlogs = async () => {
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/blogs/getAll"
    );
    const data = await response.json();
    setBlogs(data);
    console.log(data);
  };
  useEffect(() => {
    getBlog();
    getAllBlogs();
  }, []);

  return (
    <div className="home" id={theme}>
      <MenuBar theme={theme} setTheme={setTheme} />
      <div className="home-container">
        <TopNavBar theme={theme} />
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
              count = {blog && blog.likes}
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
      </div>
    </div>
  );
}

export default BlogPage;
