import { useState } from "react";
import React from "react";
import AnsUser from "../AnsweringPage/AnsUser";
import UserComponent from "./UserComponent";

import "./AnswerComponent.css";

const AnswerComponent = ({body, tags, userName, postedOn}) => {

  return (
    <div className="answer-wrapper">
    
      <div className="answer-cover">
        <div className="tag-section">
            <div className="tag-container">
                {tags && tags.map((tag) => (
                    <div className="tag">{tag}</div>
                ))}
            </div>

        </div>
        <div className="answer-section">
          <p>{body}</p>
        </div>
        <div>
          <UserComponent user = {userName} time = {postedOn} />
        </div>
      </div>
    </div>
  );
};

export default AnswerComponent;
