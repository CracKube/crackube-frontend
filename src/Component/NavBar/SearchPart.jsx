import React, { useEffect, useState } from "react";
import Search from "../../Assets/search.svg";
import AnswerComponent from "../AnswerComponent/AnswerComponent";
const SearchBarDiv = ({ handleChange }) => {
  const [input, setInput] = useState("");

  return (
    <div className="Search-cent">
      <img src={Search} alt="img" />
      <input
        className="search-central"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          handleChange(e.target.value);
        }}
        placeholder="Search for anything"
      />
    </div>
  );
};

const SearchResultsList = ({
  clicked,
  setResults,
  setClicked,
  list,
  results,
  prop,
}) => {
  const handleSwitch = (i) => {
    setClicked(i);
    setResults([]);
  };

  return (
    <div className={`results-list-${prop}`}>
      <div>
        {list.map((item, i) => (
          <div
            key={i}
            className={clicked === i ? "search-clicked" : "search-not-clicked"}
            onClick={() => handleSwitch(i)}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

const SearchResult = ({ result }) => {
  return (
    <div className="search-result">
      <img className="search-list-icon" src={Search} alt="img" />
      {result}
    </div>
  );
};

function SearchBar({ prop }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);

  const [clicked, setClicked] = useState(0);
  const list = [
    {
      name: "Everything",
    },
    {
      name: "Answers",
    },
    {
      name: "Blogs",
    },
    {
      name: "Code",
    },
    {
      name: "Profile",
    },
  ];

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
    if (value == "") {
      setResults([]);
      return;
    }
    let newResult = [];
    if (clicked == 0) {
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

      setResults(newResult.sort());
    } else if (clicked == 1) {
      //  questions.forEach((question) => {
      //   if (question.questionBody.toLowerCase().includes(value.toLowerCase())) {
      //     newResult.push(question.questionBody || question.questionTitle);
      //   }
      // });

      // full answer

      const newResult = questions.filter((question) =>
        question.questionBody.includes(value)
      );
      setResults(newResult.sort());
    } else if (clicked == 2) {
      blogs.forEach((blog) => {
        if (blog.blogTitle.toLowerCase().includes(value.toLowerCase())) {
          newResult.push(blog.blogTitle || blog.blogBody);
        }
      });

      setResults(newResult.sort());
    }
  };
  return (
    <div>
      <SearchBarDiv handleChange={handleChange} />
      <SearchResultsList
        clicked={clicked}
        setClicked={setClicked}
        list={list}
        setResults={setResults}
        results={results}
        prop={prop}
      />
    </div>
  );
}
export default SearchBar;
