import { useEffect, useState } from "react";
import React from "react";
import AnsUser from "../AnsweringPage/AnsUser";
import UserComponent from "./UserComponent";
import { Link, useParams } from "react-router-dom";
import "./AnswerComponent.css";

const AnswerComponent = ({
  body,
  tags,
  userName,
  postedOn,
  id,
  img,
  verify,
}) => {
  return (
    <div className="answer-wrapper" style={{ cursor: "pointer" }}>
     
        <div className="answer-cover">
          <div className="tag-section">
            <div className="tag-container">
              {tags && tags.map((tag) => <div className="tag">{tag}</div>)}
            </div>
          </div>
          <div className="answer-section">
            <p dangerouslySetInnerHTML={{ __html: `${body}` }}></p>
          </div>
          <div>
            <UserComponent
              user={userName}
              time={postedOn}
              img={img}
              verify={verify}
            />
          </div>
        </div>
    </div>
  );
};

export default AnswerComponent;
