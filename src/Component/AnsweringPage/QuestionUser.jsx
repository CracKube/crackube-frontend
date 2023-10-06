import React from "react";
import QuesUser from "./QuesUser";
import Tags from "./Tags";
function QuestionUser({ answer, theme }) {
  return (
    <div className="ans-line-wrap">
      <p>
        {answer && answer.questionBody}
      </p>
      <Tags answer={answer}></Tags>
      <QuesUser answer = {answer}></QuesUser>
    </div>
  );
}

export default QuestionUser;
