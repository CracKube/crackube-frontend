import React from "react";
import { useState, useEffect } from "react";
import Search from "../../Assets/search.svg";

const SearchResult = ({ setInput, input,  result, results, setActiveSuggestion, activeSuggestion, isActive }) => {
  const [suggestions, setSuggestions] = useState(results);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Enter key pressed, select the active suggestion
      setInput(suggestions[activeSuggestion]);
      setSuggestions([]);
    } else if (event.key === 'ArrowUp' && activeSuggestion >= 0) {
      // Arrow Up key pressed, move selection up
      setActiveSuggestion(activeSuggestion - 1);
    } else if (
      event.key === 'ArrowDown' &&
      activeSuggestion < suggestions.length - 1
    ) {
      console.log('keydown')
      // Arrow Down key pressed, move selection down

      setActiveSuggestion(activeSuggestion + 1);
    }
    if(event.key === 'Enter') {
      console.log('Enter');
      setInput(suggestions[activeSuggestion]);
    }
  };
  useEffect(() => {
    // Add event listener for keyboard navigation when component mounts
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSuggestion, suggestions]);

  return (
    <div className={`search-result-${isActive ? 'active' : ''}`}>
      <img className="search-list-icon" src={Search} alt="img" />
      {result.length > 50 ? <p>{result.slice(0, 50)}...</p> : <p>{result}</p>}
    </div>
  );
};

export default SearchResult;
