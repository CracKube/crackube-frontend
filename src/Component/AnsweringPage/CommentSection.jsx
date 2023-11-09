import React from "react";
import User from "../../Assets/ans-user.png";
import Msg from "../../Assets/msg.svg";
import { useState } from "react";
import axios from "axios";
const CommentSection = ({
  theme,
  openComment,
  setCommentId,
  id,
  userId,
  userCommented,
}) => {
  const [commentBody, setCommentBody] = useState("");
  const handleModal = () => {
    openComment(true);
    setCommentId(id);
  };
  const postComments = async () => {
    let value;
    value = `commentBody=${commentBody}&userCommented=${userCommented}&userPosted=${window.localStorage.getItem(
      "userId"
    )}`;
    console.log(commentBody);
    console.log(userId);
    console.log(window.localStorage.getItem("userId"));
    const response = await axios.patch(
      `https://api.crackube.com/answers/postComment/${id}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: value
      }
    );
    const body = {
      commentBody: commentBody,
      userCommented: userCommented,
      userPosted: window.localStorage.getItem("userId"),
    };
    console.log(body);
    setCommentBody("");
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
            value={commentBody}
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
