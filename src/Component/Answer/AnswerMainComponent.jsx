import React, { useEffect, useState } from "react";
import { TopNavBar } from "../Constants";
import AnswerComponent from "../AnswerComponent/AnswerComponent";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { fetchAsyncAnswer, getAnswer } from "../../redux/Answer/answerSlice";
import Categories from "../Category/Categories";
const AnswerMainComponent = ({ theme }) => {
  //const [question, setQuestion] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const getAllQuestions = async () => {
  //   const response = await fetch(
  //     "https://crackube-backend-test.onrender.com/questions/get"
  //   );
  //   const data = await response.json();
  //   setQuestion(data);
  //   console.log(data);
  // };

  useEffect(() => {
    // getAllQuestions();
    dispatch(fetchAsyncAnswer());
  }, [dispatch]);
  const [editorText, setEditorText] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blackquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  const question = useSelector(getAnswer);

  const handleAns =  () => {
    console.log(editorText);
    navigate("/uploadAnswer",  {state: {editorText}});
  }

  return (
    <div className="home-container">
      <TopNavBar theme={theme} />
      <Categories />
      <ReactQuill
        theme="snow"
        value={editorText}
        onChange={setEditorText}
        className="editor-text-question"
        modules={modules}
      />
      <div className="ask-button"><button onClick={handleAns}>Ask</button></div>
      {question &&
        question.map((item, index) => {
          return (
            <AnswerComponent
              key={index}
              theme={theme}
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
};

export default AnswerMainComponent;
