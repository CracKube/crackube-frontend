import React, { useEffect, useState } from "react";
import { TopNavBar } from "../Constants";
import AnswerComponent from "../AnswerComponent/AnswerComponent";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AnswerMainComponent = ({ theme }) => {
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
  const [editorText, setEditorText] = useState('');
  const modules = {
    toolbar: [
        [{header:[1,2,3,4,5,6,false]}],
        [{font: []}],
        [{size:[]}],
        ["bold","italic","underline","strike","blackquote"],
        [
            {list: "ordered"},
            {list:"bullet"},
            {indent:"-1"},
            {indent:"+1"},
        ],
        ["link","image","video",]
    ],
 }
  return (
    <div className="home-container">
      <TopNavBar theme={theme} />
      <ReactQuill
                  theme="snow"
                  value={editorText}
                  onChange={setEditorText}
                  className="editor-text-question"
                  modules={modules}
              /> 
      {question &&
        question.map((item, index) => {
          return <AnswerComponent 
          key = {index}
          theme={theme}
          id = {item._id}
          body={item.questionBody}
          tags = {item.questionTags}
          userName = {item.userPoster && item.userPosted._id}
          postedOn = {item.askedOn}
          
          />;
        })}
    </div>
  );
};

export default AnswerMainComponent;
