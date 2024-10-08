import React from "react";
import Profile from "../../Assets/background.png";
import League from "../../Assets/league.png";
import DP from "../../Assets/dp.png";
import Gold from "../../Assets/goldLeague.svg";
import Cup from "../../Assets/cup.svg";
import Views from "../../Assets/views.svg";
import { MainBar } from "../Constants";
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

function ProfileComponent({ }) {
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
    <div className="flex-prof" id={theme.mode}>
      <div className="imgs">
        <div>
          <div className="dp">
            <div className="showcase-cover">
              <img className="img-wrap" src={Profile} />
              <img className="dp-img" src={response.profilePicUrl} />
            </div>

            <p className="user-prof-cover">{response.name}</p>
            <p className="user-name">@{response.username}</p>
            <div className="user-flw-btn">
              <button>Follow</button>
            </div>

            <div className="user-data">
              <div className="fit">
                <p>{response.answersPosted && response.answersPosted.length}</p>
                <p>Answers</p>
              </div>
              <div className="user-sep-bar"></div>
              <div className="fit">
                <p>{response.blogsPosted && response.blogsPosted.length}</p>
                <p>Blogs</p>
              </div>
              <div className="user-sep-bar"></div>
              <div className="fit">
                <p>{response.followers && response.followers.length}</p>
                <p>Followers</p>
              </div>
              <div className="user-sep-bar"></div>
              <div className="fit">
                <p>{response.following && response.following.length}</p>
                <p>following</p>
              </div>
            </div>
            <p className="user-desc">
              Writer. #MarieTV. Fancy Dancer. <br />
              🎧 Learn to get anything you want. <br />
              Free download <br />
              marieforleo.com/blog <br />
              <strong>New Jersey, USA</strong>
            </p>
            <div className="profile-show">
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

          {clicked === 0 &&
            response.quesAsked &&
            response.quesAsked.map((item, index) => {
              return (
                <AnswerComponent
                  key={index}
                  theme={theme.mode}
                  verify={item.isVerified}
                  id={item._id}
                  body={item.questionBody}
                  tags={item.questionTags}
                  img={item.userPosted.profilePicUrl}
                  userName={item.userPosted && item.userPosted.name}
                  postedOn={item.askedOn}
                />
              );
            })}

          {/* {clicked === 1 && blogs &&     <div
      className= 'dashboard1'
    >
      {( response.blogsPosted && 
        response.blogsPosted.map((blog, index) => (
          <Card
            key={index}
            id={blog._id}
            thumbnail={blog.blogImageUrl}
            authorImage={blog.userPosted && blog.userPosted.profilePicUrl}
            title={blog.blogTitle}
            author={blog.userPosted && blog.userPosted.name}
            modified={blog.postedOn}
            tags={blog.blogTags}
          />
        ))
      )}
    </div>} */}
        </div>
      </div>
      <div className="achieve-bar">
        <div className="sub-prof" id={theme.mode}>
          <div className="cup-cover">
            <img className="img-wrap1" src={Gold} />
            <h1>1600XP</h1>
            <p>Reputation</p>
          </div>
        </div>
        <div className="sub-prof" id={theme.mode}>
          <div className="cup-cover">
            <img className="img-wrap1" src={Cup} />
            <h1>Novice</h1>
            <p>Current League</p>
          </div>
        </div>
        <div className="bar-mid">
          <div className="views-cover">
            <h1>Stats</h1>
            <p>Private for you</p>
          </div>
          <div className="view-btn">
            <button>View more</button>
          </div>
        </div>
        <div className="sub-prof" id={theme.mode}>
          <div className="cup-cover">
            <img className="img-wrap1" src={Views} />
            <h1>1900</h1>
            <p>Views in the last 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
