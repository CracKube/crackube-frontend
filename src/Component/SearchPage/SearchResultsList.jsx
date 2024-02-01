import React from "react";
import { useState } from "react";
import SearchResult from "./SearchResult";
const SearchResultsList = ({ input, setInput, results, activeSuggestion, setActiveSuggestion }) => {
  
  if (results.length !== 0) {
    return (
      <div className="list-wrap ">
        <div className="results-list hold">
          {results.map((result, id) => {
            return (
              <SearchResult
                input = {input}
                setInput={setInput}
                result={result}
                results={results}
                key={id}
                isActive={id === activeSuggestion}
                setActiveSuggestion={setActiveSuggestion}
                activeSuggestion={activeSuggestion}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default SearchResultsList;
