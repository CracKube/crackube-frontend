import moment from "moment/moment";
import React, { createContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Arrow from "../../Assets/ans-back-arrow.svg";
import User from "../../Assets/ans-user.png";
import Flag from "../../Assets/report.svg";
import {
  addAnswer,
  fetchAsyncAnswerDetail,
} from "../../redux/Answer/answerSlice";
import Clock from "./Clock";
import CommentSection from "./CommentSection";
import LikeAndReply from "./LikeAndReply";
import QuestionUser from "./QuestionUser";
import { useTheme } from "../../Context/ThemeContext";

export const ThemeContext = createContext();

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
const Comments = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      ariaHideApp={false}
      overlayClassName="modal-overlay"
    >
      {children}
    </Modal>
  );
};

function AnsweringPage() {
  const theme = useTheme();
  const id = useParams().id;
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ansId, setCommentId] = useState("");
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  //const [answer, setAnswer] = useState([]);
  const [verify, setVerify] = useState("Choose this as the best Answer");

  const [answerBody, setAnswerBody] = useState("");
  const openModal = () => {
    console.log("open");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openComment = () => {
    setIsCommentOpen(true);
  };
  const closeComment = () => {
    setIsCommentOpen(false);
  };

  // const getAnswer = async () => {
  //   const response = await fetch(
  //     `https://crackube-backend-test.onrender.com/answers/get/${id}`
  //   );
  //   const data = await response.json();
  //   setAnswer(data);
  //   console.log(data);
  // };
  const handleAnswerBody = (e) => {
    setAnswerBody(e.target.value);
  };
  const handleAnswerSubmit = async () => {
    let value;
    value = `answerBody=${answerBody}&userPosted=${window.localStorage.getItem(
      "userId"
    )}`;
    const response = await fetch(
      `https://crackube-backend-test.onrender.com/answers/post/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: value,
      }
    );
    const data = await response.json();
    console.log(data);
    closeModal();
    dispatch(fetchAsyncAnswerDetail(id));
  };
  const handleVerify = async (answerId) => {
    setVerify("Verified");
    try {
      console.log(answerId);
      console.log(window.localStorage.getItem("userId"));
      const response = await fetch(
        `https://crackube-backend-test.onrender.com/answers/verify/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `answerId=${answerId}&userId=${window.localStorage.getItem(
            "userId"
          )}`,
        }
      );
      const data = await response.json();
      dispatch(fetchAsyncAnswerDetail(id));

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(addAnswer);
    dispatch(fetchAsyncAnswerDetail(id));
    //getAnswer();
  }, [dispatch]);
  const answer = useSelector((state) => state.answers.selectedAnswer);
  console.log(answer);
  if (
    answer.data &&
    window.localStorage.getItem("userId") === answer.data.userPosted._id
  ) {
    return (
      <ThemeContext.Provider value={theme.mode}>
        <div className="questions-flex" id={theme.mode}>
          <div className="ans-page-cover" id={theme.mode}>
            <div className="ans-top-flex" id={theme.mode}>
              <h1 id={theme.mode}>Question</h1>
              <div className="mobile-back">
                <img src={Arrow} alt="" />
                <div>
                  <button className="time-btn">
                    <Clock />
                  </button>
                  <button className="points-btn">
                    +{answer.data && answer.data.points} Points
                  </button>
                  <button className="answer-btn">Increase Points</button>
                </div>
              </div>
            </div>

            <CustomModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              theme={theme.mode}
            >
              <div className="modal-head" id={theme}>
                <button onClick={closeModal} id={theme}>
                  <img src={Arrow} alt="" />
                </button>
                <h2 id={theme}>Answer the question</h2>
              </div>
              <div className="question-area">
                <h3>Question</h3>
                {answer.data && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${answer.data.questionBody}`,
                    }}
                  ></p>
                )}
              </div>
              <div className="answer-area">
                <h3>Your Answer</h3>
                <textarea
                  name=""
                  id=""
                  cols="80"
                  rows="10"
                  onChange={(e) => {
                    handleAnswerBody(e);
                  }}
                ></textarea>
              </div>
              <div className="bottom-area" id={theme.mode}>
                <button onClick={handleAnswerSubmit}>Submit</button>
              </div>
            </CustomModal>
            <Comments isOpen={isCommentOpen} onRequestClose={closeComment}>
              {answer.data &&
                answer.data.answers.map((ans, index) => {
                  return (
                    <div key={index}>
                      {ans._id === ansId &&
                        ans.comments.map((cmt, index) => {
                          return (
                            <div key={index}>
                              <div className="modal-head">
                                <button onClick={closeComment}>
                                  <img src={Arrow} alt="" />
                                </button>
                                <h2>Comments</h2>
                              </div>
                              <div className="comments-area">
                                <div className="user-cmt-img">
                                  <img
                                    src={
                                      cmt.userPosted &&
                                      cmt.userPosted.profilePicUrl
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="comments">
                                  <h3>{cmt.userCommented}</h3>
                                  <p>{cmt.commentBody}</p>
                                  <span>reply-show 2 replies</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </Comments>

            <div className="ans-line-1" id={theme.mode}>
              <QuestionUser id={theme.mode} answer={answer.data}></QuestionUser>
              <h1>{answer && answer.answerCount} Answers</h1>
              {answer.data &&
                answer.data.answers &&
                answer.data.answers.map((ans, index) => {
                  return (
                    <div className={"ans-holder"} key={index}>
                      <div
                        className={`ans-users${
                          answer.data.verifiedAnsId === ans._id ? "-sp" : ""
                        }`}
                      >
                        <div className="ans-container">
                          <div className="ans-whole-wrap-1">
                            <div className="ans-user-cover">
                              <div className="ans-user">
                                <div>
                                  <img src={User} />
                                </div>
                                <div>
                                  <div>{ans.userPosted.username}</div>
                                  <div className="user-ans-id">
                                    @{moment(ans.answeredOn).fromNow()}
                                  </div>
                                </div>
                                <div>
                                  <button>Follow</button>
                                </div>
                              </div>
                              <button className="report-flag-1">
                                <img src={Flag} alt="" />
                              </button>
                            </div>
                            <div className="answer-comp">
                              {answer.data.verifiedAnsId === ans._id && (
                                <div key={index} className="best-ans-sp">
                                  Best Answer
                                </div>
                              )}
                              {!answer.data.isVerified && (
                                <button
                                  className="best-ans"
                                  onClick={() => {
                                    handleVerify(ans._id);
                                  }}
                                >
                                  Choose the best answer
                                </button>
                              )}
                              <button className="report-flag">
                                <img src={Flag} alt="" />
                              </button>
                            </div>
                          </div>
                          <p>{ans.answerBody}</p>

                          <LikeAndReply></LikeAndReply>
                          <CommentSection
                            openComment={setIsCommentOpen}
                            setCommentId={setCommentId}
                            id={ans._id}
                            userId={ans.userPosted && ans.userPosted._id}
                            userCommented = {ans.userPosted && ans.userPosted.username}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="question-right"></div>
        </div>
      </ThemeContext.Provider>
    );
  } else {
    return (
      <ThemeContext.Provider value={theme.mode}>
        <div className="questions-flex" id={theme.mode}>
          <div className="ans-page-cover" id={theme.mode}>
            <div className="ans-top-flex">
              <h1>Question</h1>

              <div className="mobile-back">
                <img src={Arrow} alt="" />
                <div>
                  <button className="time-btn">
                    <Clock />
                  </button>
                  <button className="points-btn">
                    +{answer.data && answer.data.points} Points
                  </button>
                  <button className="answer-btn" onClick={openModal}>
                    Answer
                  </button>
                </div>
              </div>
            </div>

            <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
              <div className="modal-head">
                <button onClick={closeModal}>
                  <img src={Arrow} alt="" />
                </button>
                <h2>Answer the question</h2>
              </div>
              <div className="question-area">
                <h3>Question</h3>
                {answer.data && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${answer.data.questionBody}`,
                    }}
                  ></p>
                )}
              </div>
              <div className="answer-area">
                <h3>Your Answer</h3>
                <textarea
                  name=""
                  id=""
                  cols="80"
                  rows="10"
                  onChange={(e) => {
                    handleAnswerBody(e);
                  }}
                ></textarea>
              </div>
              <div className="bottom-area">
                <button onClick={handleAnswerSubmit}>Submit</button>
              </div>
            </CustomModal>
            <Comments isOpen={isCommentOpen} onRequestClose={closeComment}>
              <>
                <div className="modal-head">
                  <button onClick={closeComment}>
                    <img src={Arrow} alt="" />
                  </button>
                  <h2>Comments</h2>
                </div>
                {answer.data &&
                  answer.data.answers.map((ans, index) => {
                    return (
                      <div key={index}>
                        {ans._id === ansId &&
                          ans.comments.map((cmt, index) => {
                            return (
                              <div key={index}>
                                <div className="comments-area">
                                  <div className="user-cmt-img">
                                    <img
                                      src={
                                        cmt.userPosted &&
                                        cmt.userPosted.profilePicUrl
                                      }
                                      alt=""
                                    />
                                  </div>
                                  <div className="comments">
                                    <h3>{cmt.userCommented}</h3>
                                    <p>{cmt.commentBody}</p>
                                    <span>reply-show 2 replies</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
              </>
            </Comments>
            <div className="ans-line-1" id={theme.mode}>
              <QuestionUser id={theme.mode} answer={answer.data}></QuestionUser>
              <h1>{answer && answer.answerCount} Answers</h1>
              {answer.data &&
                answer.data.answers &&
                answer.data.answers.map((ans, index) => {
                  return (
                    <div className={"ans-holder"} key={index}>
                      <div
                        className={`ans-users${
                          answer.data.verifiedAnsId === ans._id ? "-sp" : ""
                        }`}
                      >
                        <div className="ans-container">
                          <div className="ans-whole-wrap-1">
                            <div className="ans-user-cover">
                              <div className="ans-user">
                                <div>
                                  <img src={User} />
                                </div>
                                <div>
                                  <div>{ans.userPosted.username}</div>
                                  <div className="user-ans-id">
                                    posted {moment(ans.answeredOn).fromNow()}
                                  </div>
                                </div>
                                <div>
                                  <button>Follow</button>
                                </div>
                              </div>
                              <button className="report-flag-1">
                                <img src={Flag} alt="" />
                              </button>
                            </div>
                            <div className="answer-comp">
                              {answer.data.verifiedAnsId === ans._id && (
                                <div className="best-ans-sp">
                                  {" "}
                                  <p>Best Answer</p>{" "}
                                </div>
                              )}

                              <button className="report-flag">
                                <img src={Flag} alt="" />
                              </button>
                            </div>
                          </div>
                          <p>{ans.answerBody}</p>

                          <LikeAndReply></LikeAndReply>
                          <CommentSection
                            openComment={setIsCommentOpen}
                            setCommentId={setCommentId}
                            id={ans._id}
                            userId={ans.userPosted && ans.userPosted._id}
                            userCommented = {ans.userPosted && ans.userPosted.username}
                            theme={theme.mode}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="question-right"></div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default AnsweringPage;
