import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import CardSkeleton from "./CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncBlogs, getAllBlog } from "../../redux/Blogs/blogSlice";
import Card from "./Card";
import styles from "./Dashboard.module.css";
export default function Dashboard(props) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncBlogs(setLoading));
  }, [dispatch]);

  const blog = useSelector(getAllBlog);
  console.log(blog);
  return (
      <div
        className={`${
          styles[props.type == "card1" ? "dashboard1" : "dashboard2"]
        }`}
      >
        {
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
            />
          ))
        }
      </div>
  );
}
