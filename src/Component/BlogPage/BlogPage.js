import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { fetchAsyncBlogDetail, fetchAsyncBlogs, getAllBlog, getSelectedBlog } from "../../redux/Blogs/blogSlice";
import SharedComponents from "../SharedComponents";
import CardBlog from "./CardBlog";
import Profile from "./Profile";
function BlogPage() {
  const theme = useTheme();
  const id = useParams().id;
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    dispatch(fetchAsyncBlogDetail(id));
    dispatch(fetchAsyncBlogs(setLoading));
  }, [dispatch, id]);

  const blog = useSelector(getSelectedBlog);
  const blogs = useSelector(getAllBlog);
  console.log(blog.blogImageColor);

  return (
    <SharedComponents>
      <div className="blog-flex" id={theme.mode}>
        <div className="blog-min">
          <div className="blog-cover">
            <div
              className="blog-container"
              style={{ boxShadow: `0px 19px 43px 0px ${blog.blogImageColor}` }}
            >
              <img src={blog.blogImageUrl} alt="" />
            </div>
            <div className="blog-title">
              <h1>{blog && blog.blogTitle} </h1>
            </div>
          </div>
          <div className="allContent">
            <div className="prof">
              <Profile
                id={id}
                saved={blog && blog.bookmarks}
                count={blog && blog.likes}
                author={blog && blog.userPosted && blog.userPosted.username}
                modified={blog && moment(blog.postedOn).fromNow()}
                url={blog && blog.userPosted && blog.userPosted.profilePicUrl}
                userId={blog && blog.userPosted && blog.userPosted._id}
              />
            </div>
            <div>
              <p
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: `${blog.blogBody}` }}
              ></p>
            </div>
          </div>
        </div>
        <div className="blog-right-bar">
          <div className="ad-bar">
            <h1>AD</h1>
          </div>
          {blogs.map((blog, index) => (
            <CardBlog
              theme={theme.mode}
              key={index}
              id={blog._id}
              thumbnail={blog.blogImageUrl}
              authorImage={blog.userPosted && blog.userPosted.profilePicUrl}
              title={blog.blogTitle}
              author={blog.userPosted && blog.userPosted.name}
              modified={blog.postedOn}
              tags={blog.blogTags}
            />
          ))}
        </div>
      </div>
    </SharedComponents>
  );
}

export default BlogPage;
