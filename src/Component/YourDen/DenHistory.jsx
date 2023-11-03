import React, { useEffect, useState } from 'react'
import AnswerComponent from '../AnswerComponent/AnswerComponent';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAsyncAnswer, getAnswer } from "../../redux/Answer/answerSlice";
import { fetchAsyncBlogs, getAllBlog } from "../../redux/Blogs/blogSlice";
import Card from '../Dashboard/Card';
const DenHistory = () => {
    const [loading, setLoading] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const [isBlog, setIsBlog] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncBlogs(setLoading));
        dispatch(fetchAsyncAnswer());
      }, [dispatch]);

      const question = useSelector(getAnswer);
      const blog = useSelector(getAllBlog);
  return (
    <div className='den-history'>
        <h1>History</h1>
        <div className='den-acc-bar'>
            <p>Answer History</p>
            <button onClick={() => setIsAnswer(!isAnswer)}>view more</button>
        </div>
        <div>

        {!isAnswer ? question &&
        question.slice(0,2).map((item, index) => {
          return (
            <AnswerComponent
              key={index}
              verify={item.isVerified}
              id={item._id}
              body={item.questionBody}
              tags={item.questionTags}
              img={item.userPosted.profilePicUrl}
              userName={item.userPosted && item.userPosted.name}
              postedOn={item.askedOn}
            />
          );
        }) : question && question.map((item, index) => {
            return (
                <AnswerComponent
                    key={index}
                    verify={item.isVerified}
                    id={item._id}
                    body={item.questionBody}
                    tags={item.questionTags}
                    img={item.userPosted.profilePicUrl}
                    userName={item.userPosted && item.userPosted.name}
                    postedOn={item.askedOn}
                />
                );
        })}
        </div>
        <div className='den-acc-bar'>
            <p>Blog History</p>
            <button onClick={() => setIsBlog(!isBlog)}>view more</button>
        </div>
        <div className='dashboard1'>
        { !isBlog ? blog.slice(0,8).map((blog, index) => {
            return(
                <Card
                  theme={blog.theme}
                  key={index}
                  id={blog._id}
                  thumbnail={blog.blogImageUrl}
                  authorImage={blog.blogImageUrl}
                  title={blog.blogTitle}
                  author={blog.userPosted}
                  modified={blog.postedOn}
                  tags={blog.blogTags}
                />)
              }
            ): blog && blog.map((blog, index) => {
                return(
                <Card
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
                )
              }
            )
            }
            </div>
    </div>
  )
}

export default DenHistory