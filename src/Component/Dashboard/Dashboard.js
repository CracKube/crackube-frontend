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
import { useDispatch } from "react-redux";
import { getAllBlog } from "../../redux/Blogs/blogSlice";
import { useSelector } from "react-redux";
import { fetchAsyncBlogs } from "../../redux/Blogs/blogSlice";
export default function Dashboard(props) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAsyncBlogs(setLoading));
  }, [dispatch]);


  const blog = useSelector(getAllBlog);
  console.log(blog);
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
        <CardSkeleton blogs={blog} />
      ) : (
        blog.map((blog, index) => (
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
