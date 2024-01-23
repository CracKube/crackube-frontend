import styles from './CardAuthor1.module.css';
import { bookmarkUrl } from '../../Constants';
import BlogShare from '../../../Assets/BlogShare.svg'
import BlogOptions from '../../../Assets/BlogOption.svg'
import BlogLike from '../../../Assets/BlogLike.svg'
import BlogSave from '../../BlogPage/BlogSave';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addBlogs, fetchAsyncBlogDetail } from "../../../redux/Blogs/blogSlice"
import { getSelectedBlog } from "../../../redux/Blogs/blogSlice";
export default function CardAuthor1(props){
    const id = useParams().id;
    const dispatch = useDispatch();
    const handleSave = async () => {
      // use axios to connect backend in body put userId
  
      // axios.post(`https://crackube-backend-test.onrender.com/like/${id}`)
  
      await axios
        .patch(`https://api.crackube.com/blogs/bookmarkBlog/${id}`, {
          userId: window.localStorage.getItem("userId"),
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        dispatch(fetchAsyncBlogDetail(id));
    };
    const blog = useSelector(getSelectedBlog);

    const ques = props.author && props.author.length;
    const val = ques && props.author.slice(0,10);
    return(
        <div className={styles.authorContainer}>
            <div className={styles.image}  onClick={() => {window.location.href = `/profile/${props.id}`}}>
               <a href=""><img src={props.authorImage} alt="" /></a> 
            </div>
            <div className={styles.title}  onClick={() => {window.location.href = `/profile/${props.id}`}}>
                <div><a href="">
                { ques < 10 ? (<>
                <div className='auth-name'>{props.author}</div>
                </>): 
                <>
                <div className='auth-name'>
                    {val}...
                </div>
                </>}</a></div>
                <div className='modi'>posted {props.modified}</div>
            </div>
            <div className={styles.bookmark}>
                <div onClick={handleSave}><img src= {BlogLike} alt="" /></div> 
                <a href=""><img src= {BlogShare} alt="" /></a>
                <a href=""><img src={BlogOptions} alt="" /></a>
            </div>
        </div>
    );
}