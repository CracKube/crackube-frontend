import { useEffect } from "react";
import {
  Card1,
  Card2,
  thumbnailUrl,
  authorUrl,
  authorUrl2,
} from "../Constants";
import styles from "./Dashboard.module.css";
import { useState } from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import CardSkeleton from "./CardSkeleton";
export default function Dashboard(props) {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/blogs/getAll"
    );
    const data = await response.json();
    setLoading(false);

    setBlogs(data);
    console.log(data);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);
  console.log(loading);
  return (
    // <InfiniteScroll
    // dataLength={5}
    // next={getAllBlogs}
    // hasMore = {true}
    // endMessage = {<p>No More Data to Load</p>}>

    <div
      className={`${
        styles[props.type == "card1" ? "dashboard1" : "dashboard2"]
      }`}
    >
      {loading ? (
        <CardSkeleton blogs={blogs} />
      ) : (
        blogs.map((blog, index) => (
          <Card
            theme={props.theme}
            key={index}
            id={blog._id}
            thumbnail={blog.blogImageUrl}
            authorImage={blog.userPosted.profilePicUrl}
            title={blog.blogTitle}
            author={blog.userPosted && blog.userPosted.name}
            modified={blog.postedOn}
            tags={blog.blogTags}
            loading={loading}
          />
        ))
      )}
    </div>
    // </InfiniteScroll>
  );
}
