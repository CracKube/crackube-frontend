import React from "react";
import User from "../../Assets/ans-user.png";
import { Link } from "react-router-dom";
import "./GPT.css";
const ChatMessage = ({ res, key, message }) => {
  return (
    <div
      className={`${message.user === "gpt" ? "ai-chat" : "user-chat"}`}
      key={key}
    >
      {message.user === "gpt" ? (
        <>
          <div className="pfp">
          <div className='prof-circle'>
        <Link><img className='prof-pic-nav-gpt'  src= {User} alt="" /></Link>
        </div>
            
          </div>
          <div className="user-text"><p>{message.message}</p></div>{" "}
        </>
      ) : (
        <>
          <div className="user-text"><p>{message.message}</p></div>
          <div className="pfp">
            <img src={res.profilePicUrl} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatMessage;
