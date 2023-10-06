import { useEffect, useState } from "react";
import React from "react";
import AnsUser from "../AnsweringPage/AnsUser";
import UserComponent from "./UserComponent";
import { useParams } from "react-router-dom";
import "./AnswerComponent.css";

const AnswerComponent = ({ body, tags, userName, postedOn, id }) => {
  const handleHistory = () => {
    window.location.href = `/answering/${id}`;
  };


  return (
    <div
      className="answer-wrapper"
      onClick={handleHistory}
      style={{ cursor: "pointer" }}
    >
      <div className="answer-cover">
        <div className="tag-section">
          <div className="tag-container">
            {tags && tags.map((tag) => <div className="tag">{tag}</div>)}
          </div>
        </div>
        <div className="answer-section">
          <p>{body}</p>
        </div>
        <div>
          <UserComponent user={userName} time={postedOn} />
        </div>
      </div>
    </div>
  );
};

export default AnswerComponent;
