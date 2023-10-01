import React from "react";
import styles from "./BlogAuthor.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const BlogSave = ({ img, note }) => {
    const id = useParams().id;
  const handleSave = () => {
    // use axios to connect backend in body put userId

    // axios.post(`https://crackube-backend-test.onrender.com/like/${id}`)

    axios
      .patch(
        `https://crackube-backend-test.onrender.com/blogs/bookmarkBlog/`, {
            userId: window.localStorage.getItem("userId"),
            blogId: id
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.blogOp} onClick={handleSave}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p>{note}</p>
      </div>
    </div>
  );
};

export default BlogSave;