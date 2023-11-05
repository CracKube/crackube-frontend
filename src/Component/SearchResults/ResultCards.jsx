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
function ResultCards(prop) {
  const [question, setQuestion] = useState([]);
  const getAllQuestions = async () => {
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/questions/get"
    );
    const data = await response.json();
    setQuestion(data);
    console.log(data);
  };
  useEffect(() => {
    getAllQuestions();
  }, []);

  if (prop.press === "Blogs") {
    return (
      <>
        <div className={style.cardsCover} id="desktop_answer">
          {/* <div className={style.cards_container}> */}
          <div className={style.blogPic}>
            <img src={Thumb} alt="" />
          </div>
          <div className={style.blogDetails}>
            <div className={style.title}>
              <div>
                <p>{prop.title}</p>
              </div>
            </div>
            <div className={style.content}>
              <p>{prop.content}</p>
            </div>
            <div className={style.Author}>
              <div>
                <Author />
              </div>
              <div className={style.menu}>
                <img src={Heart} alt="" />
                <img src={Share} alt="" />
                <img src={Options} alt="" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* <div className="mobile_answer">
          <div className={style.cardsCover}>
            <div className={style.cards_container}>
              <div className={style.blogPic}>
                <img src={Thumb} alt="" />
              </div>
              <div className={style.blogDetails}>
                <div className={style.title}>
                  <div>
                    <p>{prop.title}</p>
                  </div>
                </div>
                <div className={style.content}>
                  <p>{prop.content}</p>
                </div>
                <div className={style.Author}>
                  <div>
                    <Author />
                  </div>
                  <div className={style.menu}>
                    <img src={Heart} alt="" />
                    <img src={Share} alt="" />
                    <img src={Options} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  } else if (prop.press === "Answer") {
    return (
      <div>
        {question &&
          question.map((item, index) => {
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
