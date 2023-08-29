import { useContext } from "react"
import { useState } from "react"
import { ImageContext } from "./UnSplash"


const SearchField = () => {
    const [searchValue, setSearchValue] = useState("")
    const {fetchData, setSearchImage} = useContext(ImageContext);
    const handleInput = (e) => {
        setSearchValue(e.target.value)
    }
    const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=DvYlTKQ_ADiGY_WeuKA5qsmvz3UndBXspjxkEh9LL6I`)
        setSearchValue("");
        setSearchImage(searchValue)
    }
    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            fetchData(`search/photos?page=1&query=${searchValue}&client_id=DvYlTKQ_ADiGY_WeuKA5qsmvz3UndBXspjxkEh9LL6I`)
        setSearchValue("");
        setSearchImage(searchValue)
        }
    }
  return (
    <div>
        <input 
        placeholder="Search Any Thing"
        value={searchValue}
        type='search'
        onChange={handleInput}
        onKeyDown={handleEnter}
        ></input>
        <button 
        onClick={handleButtonSearch}
        disabled = {!searchValue}
        >Search</button>
    </div>
  )
}

export default SearchField