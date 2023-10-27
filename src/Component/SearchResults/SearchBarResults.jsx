import React from "react";
import style from "./results.module.css";
import Search from "../../Assets/search.svg";
import { useState } from "react";
function SearchBarResults({ press, setPress }) {
  const [clicked, setClicked] = useState(1);
  const list = [
    {
      name: "All",
    },
    {
      name: "Answer",
    },
    {
      name: "Blogs",
    },
    {
      name: "Code",
    },
    {
      name: "People",
    },
  ];
  const handleClick = (index, value) => {
    setClicked(index);
    setPress(value);
  };
  return (
    <div className={style.container}>
        <div className= {style.cover}>
      <div className={style.searchcontainer}>
        <div className={style.searchcontainercover}>
          <input type="text" className={style.input}  placeholder="search anything"/>
        </div>
        
      </div>
    <div className= {style.imgCover}>
      <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5002 17.5L13.881 13.8809M13.881 13.8809C14.5001 13.2618 14.9912 12.5269 15.3262 11.718C15.6612 10.9091 15.8337 10.0422 15.8337 9.16672C15.8337 8.29121 15.6612 7.42429 15.3262 6.61543C14.9912 5.80657 14.5001 5.07162 13.881 4.45255C13.2619 3.83348 12.527 3.3424 11.7181 3.00736C10.9093 2.67232 10.0423 2.49988 9.16684 2.49988C8.29134 2.49988 7.42441 2.67232 6.61555 3.00736C5.80669 3.3424 5.07174 3.83348 4.45267 4.45255C3.2024 5.70282 2.5 7.39856 2.5 9.16672C2.5 10.9349 3.2024 12.6306 4.45267 13.8809C5.70295 15.1312 7.39868 15.8336 9.16684 15.8336C10.935 15.8336 12.6307 15.1312 13.881 13.8809Z"
            stroke="#737373"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        </div>
        </div>
      <div className={style.filters}>
        <div className={style.leftfilters}>
          {list.map((item, index) => {
            return (
              <button
                className={
                  clicked === index ? `${style.buttonclick}` : `${style.button}`
                }
                onClick={() => handleClick(index, item.name)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchBarResults;
