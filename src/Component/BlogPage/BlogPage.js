import React from "react";
import Search from "../../Assets/search.svg";
import { Link, useParams } from "react-router-dom";
import MenuBar from "../MenuBar";
import { MainBar, TopNavBar } from "../Constants";
import homeIcon from "../../Assets/homeIcon.svg";
import blogPic from "../../Assets/blogPic.svg";
import { useEffect } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addBlogs, fetchAsyncBlogDetail } from "../../redux/Blogs/blogSlice";
import { fetchAsyncBlogs } from "../../redux/Blogs/blogSlice";
import { getSelectedBlog } from "../../redux/Blogs/blogSlice";
import { getAllBlog } from "../../redux/Blogs/blogSlice";
import BlogComponent from "./BlogComponent";
function BlogPage({ theme, setTheme }) {
  const id = useParams().id;
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
 // const [blog, setBlog] = React.useState({});
  const [blogs, setBlogs] = React.useState([]);

  const getAllBlogs = async () => {
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/blogs/getAll"
    );
    const data = await response.json();
    setBlogs(data);
    console.log(data);
  };
  useEffect(() => {
    dispatch(fetchAsyncBlogDetail(id));
    getAllBlogs();
  }, [dispatch, id]);

  const blog = useSelector(getSelectedBlog)
//  const blogs = useSelector(getAllBlog)
  console.log(blog);

  return (
    <div className="home" id={theme}>
      <MenuBar theme={theme} setTheme={setTheme} />
      <div className="home-container">
        <TopNavBar theme={theme} />
        <BlogComponent blog={blog} blogs = {blogs} id = {id} theme={theme} />
      </div>
    </div>
  );
}

export default BlogPage;
