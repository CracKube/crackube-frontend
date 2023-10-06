import React from "react";
import QuesUser from "./QuesUser";
import Tags from "./Tags";
function QuestionUser({ answer, theme }) {
  return (
    <div className="ans-line-wrap">
        {answer && <p dangerouslySetInnerHTML={{__html: `${answer.questionBody}`}}></p>}

      <div>
        {answer && answer.points}
      </div>
      <Tags answer={answer}></Tags>
      <QuesUser answer = {answer}></QuesUser>
    </div>
  );
}

export default QuestionUser;
