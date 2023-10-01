import React from "react";
import SearchResult from "./SearchResult";
const SearchResultsList =({results}) => {

    if (results.length !== 0) {
      console.log("Hello");
      return(
        <div className="list-wrap ">
        <div className='results-list hold'>
          {
            results.map((result,id)=>{
              return <SearchResult result={result} key={id}/>
            })
          }
        </div>
        </div>
      )
    }
  
  }

  export default SearchResultsList

