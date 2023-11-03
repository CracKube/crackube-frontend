import React, { useEffect } from "react";
import styles from "./BlogAuthor.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addBlogs, fetchAsyncBlogDetail } from "../../redux/Blogs/blogSlice";
import { getSelectedBlog } from "../../redux/Blogs/blogSlice";

const BlogLike = ({ img, note, count }) => {
    const id = useParams().id;
    const dispatch = useDispatch();
  const handleLike = async () => {

    // use axios to connect backend in body put userId

    // axios.post(`https://crackube-backend-test.onrender.com/like/${id}`)

     await axios
      .patch(
        `https://api.crackube.com/blogs/like/${id}`, {
            userId: window.localStorage.getItem("userId")
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
     dispatch(fetchAsyncBlogDetail(id));

  };
  const blog = useSelector(getSelectedBlog);
  return (
    <div className={styles.blogOp} onClick={handleLike}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p>{blog.likes == null ? <p>0</p> :  blog.likes.length}</p>
      </div>
      <div>
        <p>{note}</p>
      </div>
    </div>
  );
};

export default BlogLike;
