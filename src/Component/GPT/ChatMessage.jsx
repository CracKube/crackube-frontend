import React from "react";
import User from "../../Assets/ans-user.png";
const ChatMessage = ({ key, message }) => {
  if (message.user === "loading") {
    return (
      <div className="ai-chat" key={key}>
        <>
          <div className="pfp">
            <img src={User} alt="" />
          </div>
          <div className="demo">
            <div className="blink"></div>
            <div className="blink2"></div>
            <div className="blink3"></div>
          </div>{" "}
        </>
      </div>
    );
  } else {
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
            <div className="user-text">
              <p>{message.message}</p>
            </div>{" "}
          </>
        ) : (
          <>
            <div className="user-text">
              <p>{message.message}</p>
            </div>
            <div className="pfp">
              <img src={User} alt="" />
            </div>
          </>
        )}
      </div>
    );
  }
};

export default ChatMessage;
