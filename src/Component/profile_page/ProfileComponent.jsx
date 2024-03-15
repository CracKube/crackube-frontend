import React from "react";
import Profile from "../../Assets/background.png";
import League from "../../Assets/league.png";
import DP from "../../Assets/dp.png";
import Gold from "../../Assets/goldLeague.svg";
import Cup from "../../Assets/cup.svg";
import Views from "../../Assets/views.svg";
import { Dashboard, MainBar } from "../Constants";
import { useState, useEffect } from "react";
import axios from "axios";
import AnswerComponent from "../AnswerComponent/AnswerComponent";
import Card from "../BlogPage/CardBlog";
import { fetchAsyncUsers, getUserElse } from "../../redux/Users/userElseSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/Users/userSlice";
import { useParams } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";

function ProfileComponent({}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  // const [response, setResponse] = useState("");
  const id = useParams().id;
  // const getUserDetails = async () => {
  //   const response = await axios.get(
  //     `https://crackube-backend-test.onrender.com/users/getUser/${window.localStorage.getItem(
  //       "userId"
  //     )}`
  //   );
  //   setResponse(response.data);
  //   setBlogLength(response.data.blogsPosted.length);
  //   setAnsLength(response.data.quesAnswered.length);
  // };

  const [clicked, setClicked] = useState(1);
  const list = [
    {
      name: "Answer",
    },
    {
      name: "Blog",
    },
    {
      name: "Code",
    },
  ];

  useEffect(() => {
    dispatch(fetchAsyncUsers(id));
  }, [dispatch, id]);
  const response = useSelector((state) => state.userElse.userElse);
  console.log(response);
  return (
    <div className="profile_container">
      <div className="profile_info">
        <div className="profile_images">
          <img className="banner_image" src={Profile} alt="banner" />
          <img
            className="profile_image"
            src={response.profilePicUrl}
            alt="profile"
          />
        </div>
        <div className="all_info">
          <p className="info_name">{response.name}</p>
          <p className="info_username">@{response.username}</p>
          <button className="info_follow_btn">Follow</button>
        </div>

        <div className="user_infoData">
          <div className="user_fit">
            <p className="p">{response.answersPosted && response.answersPosted.length}</p>
            <p>Answers</p>
          </div>
          <div className="user-sep-bar"></div>
          <div className="user_fit">
            <p className="p">{response.blogsPosted && response.blogsPosted.length}</p>
            <p>Blogs</p>
          </div>
          <div className="user-sep-bar"></div>
          <div className="user_fit">
            <p className="p">{response.followers && response.followers.length}</p>
            <p>Followers</p>
          </div>
          <div className="user-sep-bar"></div>
          <div className="user_fit">
            <p className="p">{response.following && response.following.length}</p>
            <p>following</p>
          </div>
        </div>

        <div>
          <p className="user-desc">
            Writer. #MarieTV. Fancy Dancer. <br />
            🎧 Learn to get anything you want. <br />
            Free download <br />
            marieforleo.com/blog <br />
            <strong>New Jersey, USA</strong>
          </p>
        </div>

        <div className="info_profile-show">
          <div className="profile-nav-btn">
            {list.map((item, index) => {
              return (
                <button
                  key={index}
                  className={
                    clicked === index ? "profile-click-btn" : "profile-btn"
                  }
                  onClick={() => {
                    setClicked(index);
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="profile_blogs">
        <Dashboard type="card1" theme={theme} />
      </div>
    </div>
  );
}

export default ProfileComponent;
