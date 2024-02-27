import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import arrow from "../../Assets/arrowUp.svg";
import camera from "../../Assets/camera.svg";
import category from "../../Assets/category.svg";
import follow from "../../Assets/follow-prof.svg";
import vector from "../../Assets/vector.svg";
import { useTheme } from "../../Context/ThemeContext";
import SharedComponents from "../SharedComponents";
import SearchResultsList from "./SearchResultsList";
import "../../styles/Sheets/Login.css";
const SearchBar = ({ setInput, input, handleChange }) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search-results", { state: { input } });
  };

  return (
    <div className="Search">
      <div className="search-container">
        <form
          action="submit"
          onSubmit={() => {
            handleSearch();
          }}
        >
          <input
            className="search-bar"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              handleChange(e.target.value);
            }}
            placeholder="Search for anything"
          />
        </form>
        <div className="search-attr">
          <img src={camera} className="camera-ocr" alt="" />
          <svg
            width="2"
            height="18"
            viewBox="0 0 2 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 17L1 1" stroke="#737373" stroke-linecap="round" />
          </svg>
          <p>All</p>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div
        className="search-icon"
        onClick={() => {
          handleSearch();
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.3841 20.6906L18.3293 16.6477C19.6375 14.981 20.3474 12.9228 20.3448 10.804C20.3448 8.91698 19.7852 7.07237 18.7368 5.5034C17.6885 3.93442 16.1984 2.71156 14.4551 1.98944C12.7117 1.26732 10.7934 1.07838 8.94266 1.44651C7.09193 1.81464 5.39192 2.72332 4.05762 4.05762C2.72332 5.39192 1.81464 7.09193 1.44651 8.94266C1.07838 10.7934 1.26732 12.7117 1.98944 14.4551C2.71156 16.1984 3.93442 17.6885 5.5034 18.7368C7.07237 19.7852 8.91698 20.3448 10.804 20.3448C12.9228 20.3474 14.981 19.6375 16.6477 18.3293L20.6906 22.3841C20.8015 22.4959 20.9334 22.5846 21.0787 22.6452C21.224 22.7057 21.3799 22.7369 21.5374 22.7369C21.6948 22.7369 21.8507 22.7057 21.996 22.6452C22.1413 22.5846 22.2732 22.4959 22.3841 22.3841C22.4959 22.2732 22.5846 22.1413 22.6452 21.996C22.7057 21.8507 22.7369 21.6948 22.7369 21.5374C22.7369 21.3799 22.7057 21.224 22.6452 21.0787C22.5846 20.9334 22.4959 20.8015 22.3841 20.6906ZM3.64838 10.804C3.64838 9.38873 4.06805 8.00527 4.85432 6.82854C5.64058 5.65181 6.75813 4.73466 8.06565 4.19307C9.37316 3.65148 10.8119 3.50978 12.2 3.78588C13.588 4.06198 14.863 4.74348 15.8637 5.74421C16.8645 6.74493 17.546 8.01994 17.8221 9.40799C18.0982 10.796 17.9565 12.2348 17.4149 13.5423C16.8733 14.8498 15.9561 15.9674 14.7794 16.7536C13.6027 17.5399 12.2192 17.9596 10.804 17.9596C8.90619 17.9596 7.08614 17.2057 5.74421 15.8637C4.40227 14.5218 3.64838 12.7018 3.64838 10.804Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
function SearchNavbar() {
  return (
    <div className="search-nav-bar-eff">
      <div className="profile-show">
        <div className="profile-nav-btn">
          {/* <NavLink
            className="profile-nav-btn-active"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#F2F2F2" : "",
            })}
          >
            <img src={vector} alt="" /> <p>Trending</p>
          </NavLink> */}
          <NavLink
            className="profile-nav-btn-active"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#F2F2F2" : "",
            })}
          >
            <img src={category} alt="" /> <p>Categories</p>
          </NavLink>
          {/* <NavLink
            className="profile-nav-btn-active"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#F2F2F2" : "",
            })}
          >
            <img src={follow} alt="" /> <p>who to follow</p>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}
function SearchPage() {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const getData = async () => {
    const response1 = await fetch(
      "https://crackube-backend-test.onrender.com/blogs/getAll"
    );
    const data1 = await response1.json();
    setBlogs(data1);

    const response2 = await fetch(
      "https://crackube-backend-test.onrender.com/questions/get"
    );
    const data2 = await response2.json();
    setQuestions(data2);

    const response3 = await fetch(
      "https://crackube-backend-test.onrender.com/users/getUsers"
    );
    const data3 = await response3.json();
    setUsers(data3);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (value) => {
    setInput(value);

    let newResult = [];

    blogs.forEach((blog) => {
      if (blog.blogTitle.toLowerCase().includes(value.toLowerCase())) {
        newResult.push(blog.blogTitle);
      }
    });

    questions.forEach((question) => {
      if (question.questionBody.toLowerCase().includes(value.toLowerCase())) {
        newResult.push(question.questionBody);
      }
    });

    // users.forEach(user => {
    //   if (user.firstName.toLowerCase().includes(value.toLowerCase())) {
    //     newResult.push(user.firstName)
    //   }
    // })

    setResults(newResult);
  };

  return (
    <SharedComponents>
      <div className="SearchPage">
        <SearchBar
          setInput={setInput}
          input={input}
          handleChange={handleChange}
        />

        <div className="list-wrap overlay">
          <SearchResultsList
            input={input}
            setInput={setInput}
            results={results}
            activeSuggestion={activeSuggestion}
            setActiveSuggestion={setActiveSuggestion}
          />
        </div>
        <SearchNavbar />
        <div className="coverUp">
          <div className="Discover">
            <div className="Dbox"></div>
            <div className="Dbox"></div>
            <div className="Dbox"></div>
            <div className="Dbox"></div>
            <div className="Dbox"></div>
            <div className="Dbox"></div>
          </div>
        </div>
      </div>
    </SharedComponents>
  );
}

export default SearchPage;
