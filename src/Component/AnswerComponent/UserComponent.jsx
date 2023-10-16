import React from "react";
import User from "../../Assets/ans-user.png";
import BookMark from "../../Assets/bookmark.png";
import RedFlag from "../../Assets/red-flag.png";
import Share from "../../Assets/Artboard.svg";
import Options from "../../Assets/Options.svg";
import Verify from "../../Assets/Verify.svg";
import moment from "moment";
function UserComponent({ user, time }) {
  return (
    <div className="ans-whole-wrap">
      <div className="ans-user">
        <div className="user-pic">
          <img src={User} />
        </div>
        <div>
          <div className="user-name">
            <p>{user && user}</p> <img src={Verify} alt="" />
          </div>
          <div className="user-ans-id">posted {moment(time).fromNow()}</div>
        </div>
        <div></div>
      </div>
      <div className="right-holder">
        <div className="bk-btn-wrap">
          <img src={BookMark} alt="" />
          <img src={Share} alt="" />
          <img src={Options} alt="" />
        </div>
        <button>Answer</button>
      </div>
    </div>
  );
}

export default UserComponent;
