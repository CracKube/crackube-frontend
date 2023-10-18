import React from "react";
import User from "../../Assets/ans-user.png";
const ChatMessage = ({ key, message }) => {
  return (
    <div
      className={`${message.user === "gpt" ? "ai-chat" : "user-chat"}`}
      key={key}
    >
      {message.user === "gpt" ? (
        <>
          <div className="pfp">
            <img src={User} alt="" />
          </div>
          <div className="user-text"><p>{message.message}</p></div>{" "}
        </>
      ) : (
        <>
          <div className="user-text"><p>{message.message}</p></div>
          <div className="pfp">
            <img src={User} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatMessage;
