import React from "react";
import Tags from "./Tags";
import User from "../../Assets/ans-user.png";
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
                  <div>{answer.userPosted.name}</div>
                  <div className="user-ans-id">@{answer.userPosted._id}</div>
                </div>
                <div>
                  <button>Follow</button>
                </div>
              </div>
              <div>
                <div className="bk-btn-wrap"></div>
              </div>
            </div>
    </>
  );
}

export default AnsUser;
