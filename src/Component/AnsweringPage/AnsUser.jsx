import React from "react";
import Tags from "./Tags";
import User from "../../Assets/ans-user.png";
import Flag from "../../Assets/report.svg";
import BookMark from "../../Assets/bookmark.png";
import RedFlag from "../../Assets/red-flag.png";
function AnsUser({ answer }) {
  return (
    <>
            <div className="ans-whole-wrap-1">
              <div className="ans-user">
                <div>
                  <img src={User} />
                </div>
                <div>
                  <div>{answer.userPosted.username}</div>
                  <div className="user-ans-id">@{answer.userPosted._id}</div>
                </div>
                <div>
                  <button>Follow</button>
                </div>
              </div>
              <div>
                <button className="report-flag"><img src= {Flag} alt="" /></button>
              </div>
            </div>
    </>
  );
}

export default AnsUser;
