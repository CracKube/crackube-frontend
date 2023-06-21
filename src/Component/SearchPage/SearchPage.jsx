import React, {useState} from 'react'
import Search from '../../Assets/search.svg'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'

const SearchBar = ({setResults})=>{
  const [input, setInput ] = useState("");
  
  
    const fecthData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(json =>{
        // console.log(json);
        const results = json.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
        });
        setResults(results);
        
      } )
    }
    const handleChange = (value) => {
      setInput(value)
      fecthData(value)
    }
  return (
    <div className='Search'>
    <img src= {Search} alt="img" />    
    <input className='search-bar' 
    type="text" value={input} onChange={(e) => handleChange(e.target.value)}
    placeholder='Search for anything'/>
    <button className='search-button'>Search</button>

    </div>
  )
}

const SearchResultsList =({results}) => {
  return(
    <div className='results-list'>
      {
        results.map((result,id)=>{
          return <div key={id}>{result.name}</div>
        })
      }
    </div>
  )
}




function SearchPage () {
  
  const [results, setResults] = useState([]);
 
  
  return (

    <div className='home'>
      <MenuBar>
          <div className="menu-bar-link">
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Home</p></Link>
            <Link to='/search' className="menu-btn"><img src={homeIcon} alt=""/><p>Explore</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>CK Originals</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Bookmarks</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Your Content</p></Link>
          </div>
        </MenuBar>
   
        
       
        <div className='home-container'>
        <TopNavBar className= "search-change" ></TopNavBar>
        <div className='SearchPage'>
        <div className='Comp-Name' >
            <p>CracKube</p>      
            
        </div>
       {/* SearchBar */}
       <SearchBar setResults={setResults}/>
       <SearchResultsList results={results}/>
        <div className='coverUp'>
        <div ><p>Discover</p></div>
        <div className='Discover'>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
        </div>
        </div>
        </div>
        
       
    </div>
    </div>
  )
}

export default SearchPage