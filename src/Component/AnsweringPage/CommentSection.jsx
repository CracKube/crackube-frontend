import React from "react";
import User from "../../Assets/ans-user.png";
import Msg from "../../Assets/msg.svg";
import { useState } from "react";
const CommentSection = ({ theme, openComment, setCommentId, id }) => {
  const [commentBody, setCommentBody] = useState("");
  const handleModal = () => {
    openComment(true);
    setCommentId(id);
  };
  const postComments = async () => {
    let value;
    value = `commentBody=${commentBody}&userCommented=${window.localStorage.getItem(
      "userId"
    )}`;
    const response = await fetch(
      `https://crackube-backend-test.onrender.com/answers/postComment/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: value,
      }
    );
    console.log(response);
  };
  const handleComments = (e) => {
    setCommentBody(e.target.value);
  };
  return (
    <div className="comment-cover" id={theme}>
      <div className="cmt-flex" id={theme}>
        <h5>21 Comments</h5>
        <button onClick={handleModal}>view 21 comments</button>
      </div>

      <div className="comment-flex">
        <img src={User} alt="" />
        <div className="send-msg">
          <input
            type="text"
            placeholder="Add a comment, @ to mention"
            onChange={(e) => {
              handleComments(e);
            }}
          />
        </div>
        <div className="msg-arrow">
          <img src={Msg} alt="" onClick={postComments} />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
