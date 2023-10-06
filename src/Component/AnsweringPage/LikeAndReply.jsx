import React, { useState } from "react";
import Like from "../../Assets/heart-like.svg";
import Dislike from "../../Assets/heart-dislike.svg";
import Flags from "../../Assets/flags.png";
function LikeAndReply(prop) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    if (dislike > 0) {
      setDislike(dislike - 1);
      setLike(like + 1);
      return;
    }
    if (like >= 1) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
  };
  const handleDislike = () => {
    if (like > 0) {
      setLike(like - 1);
      setDislike(dislike + 1);
      return;
    }
    if (dislike >= 1) {
      setDislike(dislike - 1);
    } else {
      setDislike(dislike + 1);
    }
  };
  return (
    <div className="whole-cover">
      <div className="likes-cover">
        <div className="love-it">
          <img src={Like} onClick={handleLike} alt="" />
          <div>Love it</div>
        </div>

        <div></div>

        <div className="hate-it">
          <img src={Dislike} alt="" onClick={handleDislike} />
          <div>Hate it</div>
        </div>
      </div>
    </div>
  );
}

export default LikeAndReply;
