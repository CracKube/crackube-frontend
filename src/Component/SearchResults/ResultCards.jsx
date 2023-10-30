import React from "react";
import style from "./results.module.css";
import Author from "./Author";
import Heart from "../../Assets/Heart.png";
import Share from "../../Assets/Share.png";
import Options from "../../Assets/Options.png";
import Thumb from "../../Assets/Thumbnail.png";
import AnswerComponent from "../AnswerComponent/AnswerComponent";
import { QuestionAuthor } from "../Constants";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAsyncBlogs } from "../../redux/Blogs/blogSlice";
import { getAllBlog } from "../../redux/Blogs/blogSlice";
function ResultCards(prop) {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const getAllQuestions = async () => {
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/questions/get"
    );
    const data = await response.json();
    setQuestion(data);
    console.log(data);
  };
  const getBlogs = async () => {
    const response1 = await fetch(
      "https://crackube-backend-test.onrender.com/blogs/getAll"
    );
    const data1 = await response1.json();
    setBlogs(data1);
  };

  useEffect(() => {
    getAllQuestions();
    // dispatch(fetchAsyncBlogs());
    getBlogs();
  }, []);
  //const blogs = useSelector(getAllBlog);
  console.log(blogs);
  if (prop.press === "Blogs") {
    let newResult = blogs.filter((blog) =>
      blog.blogTitle.toLowerCase().includes(prop.value.toLowerCase())
    );

    //console.log(newResult);
    return (
      <div>
        {prop.value &&
          newResult &&
          newResult.sort().map((item, index) => {
            return (
              <div className={style.cardsCover} key={index}>
                <div className={style.blogPic}>
                  <img src={item.blogImageUrl} alt="" />
                </div>
                <div className={style.blogDetails}>
                  <div className={style.title}>
                    <div>
                      <p>{item.blogTitle}</p>
                    </div>
                  </div>
                  <div className={style.content}>
                    <p>{item.blogBody.slice(0, 20)}</p>
                  </div>
                  <div className={style.Author}>
                    <div>
                      <Author
                        img={item.userPosted && item.userPosted.profilePicUrl}
                        name={item.userPosted && item.userPosted.name}
                        user={item.userPosted && item.userPosted.username}
                      />
                    </div>

                    <div className={style.menu}>
                      <img src={Heart} alt="" />
                      <img src={Share} alt="" />
                      <img src={Options} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  } else if (prop.press === "Answer") {
    const newResult = question.filter((question) =>
      question.questionBody.toLowerCase().includes(prop.value.toLowerCase())
    );
    if (prop.value === " ") {
      newResult = [];
      return;
    }

    return (
      <div>
        {prop.value &&
          newResult &&
          newResult.sort().map((item, index) => {
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
    );
  } else if (prop.press === "Code") {
    return <div>Code</div>;
  } else if (prop.press === "People") {
    return <div>People</div>;
  }
}

export default ResultCards;
