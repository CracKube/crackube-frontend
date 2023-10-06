import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar";
import { TopNavBar } from "../Constants";
import homeIcon from "../../Assets/homeIcon.svg";
import AnsUser from "./AnsUser";
import LikeAndReply from "./LikeAndReply";
import Answer from "../../Assets/Answer.png";
import QuestionUser from "./QuestionUser";
import QuesUser from "./QuesUser";
import CommentSection from "./CommentSection";
import { useParams } from "react-router-dom";
import Arrow from "../../Assets/ans-back-arrow.svg";
import Modal from "react-modal";
import { useEffect } from "react";
const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      {children}
    </Modal>
  );
};

function AnsweringPage({ theme, setTheme }) {
  const  id  = useParams().id;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState([]);
  const [answerBody, setAnswerBody] = useState('');
  const openModal = () => {
    console.log("open");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const getAnswer = async () => {
    const response = await fetch(
      `https://crackube-backend-test.onrender.com/answers/get/${id}`
    );
    const data = await response.json();
    setAnswer(data);
    console.log(data);
  };
  const handleAnswerBody = (e) => {
    setAnswerBody(e.target.value);
  };
  const handleAnswerSubmit = async () => {
    let value;
    value = `answerBody=${answerBody}&userPosted=${window.localStorage.getItem("userId")}`;
    const response = await fetch(
      `https://crackube-backend-test.onrender.com/answers/post/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: value
      }
    );
    const data = await response.json();
    console.log(data);
    closeModal();
    getAnswer();
  }

  useEffect(() => {
    getAnswer();
  }, []);
  return (
    <div className="questions-flex">
      <div className="ans-page-cover">
        <div className="ans-top-flex">
          <h1>Question</h1>
          <button onClick={openModal}>Answer</button>
        </div>

        <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <div className="modal-head">
            <button onClick={closeModal}><img src= {Arrow} alt="" /></button>
            <h2>Answer the question</h2>
          </div>
          <div className="question-area">
            <h3>Question</h3>
            <p>
              {answer.data && answer.data.questionBody}
            </p>
          </div>
          <div className="answer-area">
            <h3>Your Answer</h3>
            <textarea name="" id="" cols="80" rows="10" onChange={(e) => {handleAnswerBody(e)}}></textarea>
          </div>
          <div className="bottom-area">
          <button onClick={handleAnswerSubmit}>Submit</button>
          </div>
        </CustomModal>
        <div className="ans-line-1" id={theme}>
          <QuestionUser id={theme} answer = {answer.data}></QuestionUser>
          <h1>{answer && answer.answerCount} Answers</h1>
          {answer.data &&
            answer.data.answers && answer.data.answers.map((ans) => {
              return(
                <div className="ans-holder">
            <div className="ans-users">
              <div className="ans-container">
                <AnsUser answer = {ans}></AnsUser>
                <p>
                  {ans.answerBody}
                </p>

                <LikeAndReply></LikeAndReply>
                <CommentSection />
              </div>
            </div>
          </div>
              )
            })
          }
          

        </div>
      </div>
      <div className="question-right"></div>
    </div>
  );
}

export default AnsweringPage;
