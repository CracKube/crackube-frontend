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
import { fetchAsyncAnswer, getAnswer } from "../../redux/Answer/answerSlice";
function ResultCards(prop) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  //const [question, setQuestion] = useState([]);
  //const [blogs, setBlogs] = useState([]);
  // const getAllQuestions = async () => {
  //   const response = await fetch(
  //     "https://crackube-backend-test.onrender.com/questions/get"
  //   );
  //   const data = await response.json();
  //   setQuestion(data);
  //   console.log(data);
  // };
  // const getBlogs = async () => {
  //   const response1 = await fetch(
  //     "https://crackube-backend-test.onrender.com/blogs/getAll"
  //   );
  //   const data1 = await response1.json();
  //   setBlogs(data1);
  // };

  useEffect(() => {
    //getAllQuestions();
    dispatch(fetchAsyncAnswer());
    dispatch(fetchAsyncBlogs(setLoading));
  }, [dispatch]);
  const blogs = useSelector(getAllBlog);
  const question = useSelector(getAnswer);
  const blogsWithType = blogs.map((blog) => ({...blog, type: "blog"}));
  const questionWithType = question.map((question) => ({...question, type: "question"}));
  const allData = [...blogsWithType, ...questionWithType];
  if (prop.clicked === 2) {
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
  } else if (prop.clicked === 1) {
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
  } else if (prop.clicked === 3) {
    return <div>Code</div>;
  } else if (prop.clicked === 4) {
    return <div>People</div>;
  } else if (prop.clicked === 0) {
    // display both answer and blog from allData
    const newResult = allData.filter((item) =>
      item.type === "blog"
        ? item.blogTitle.toLowerCase().includes(prop.value.toLowerCase())
        : item.questionBody.toLowerCase().includes(prop.value.toLowerCase())
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


  }
}

export default ResultCards;
