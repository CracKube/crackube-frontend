import React, { useEffect, useState } from 'react'
import Search from '../../Assets/search.svg'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
import { useState } from 'react'
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
      <img src={Search} alt="img" />
      <input className='search-bar'
        type="text" value={input} onChange={(e) => { setInput(e.target.value); handleChange(e.target.value) }}
        placeholder='Search for anything' />
      <button className='search-button'>Search</button>

    </div>
  )
}

const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {
        results.map((result, id) => {
          return <SearchResult result={result} key={id} />
        })
      }
    </div>
  )
}

<<<<<<< HEAD



function SearchPage () {
  
  const [results, setResults] = useState([]);
 
  
 
=======
const SearchResult = ({ result }) => {
  return (
    <div className='search-result'>

      <img className='search-list-icon' src={Search} alt="img" />
      {result}</div>
  )

}



>>>>>>> bf40c45a27e478831da52a363ea042be840625cd
function SearchPage() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [blogs, setBlogs] = useState([])
  const [questions, setQuestions] = useState([])
  const [users, setUsers] = useState([])


  const getData = async () => {
    const response1 = await fetch('https://crackube-backend-test.onrender.com/blogs/getAll');
    const data1 = await response1.json();
    setBlogs(data1)

    const response2 = await fetch('https://crackube-backend-test.onrender.com/questions/get');
    const data2 = await response2.json();
    setQuestions(data2)

    const response3 = await fetch('https://crackube-backend-test.onrender.com/users/getUsers');
    const data3 = await response3.json();
    setUsers(data3)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (value) => {
    setInput(value)
    if (value == "") {
      setResults([])
      return
    }

    let newResult = []

    blogs.forEach(blog => {
      if (blog.blogTitle.toLowerCase().includes(value.toLowerCase())) {
        newResult.push(blog.blogTitle)
      }
    })

    questions.forEach(question => {
      if (question.questionBody.toLowerCase().includes(value.toLowerCase())) {
        newResult.push(question.questionBody)
      }
    })

    // users.forEach(user => {
    //   if (user.firstName.toLowerCase().includes(value.toLowerCase())) {
    //     newResult.push(user.firstName)
    //   }
    // })

    setResults(newResult)
  }

  return (

    <div className='home'>
      <MenuBar>
        <div className="menu-bar-link">
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Home</p></Link>
          <Link to='/search' className="menu-btn"><img src={homeIcon} alt="" /><p>Explore</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>CK Originals</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Bookmarks</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Your Content</p></Link>
        </div>
      </MenuBar>



      <div className='home-container'>
        <TopNavBar className="search-change" ></TopNavBar>
        <div className='SearchPage'>
          <div className='Comp-Name' >
            <p>CracKube</p>

          </div>
          {/* SearchBar */}
          <SearchBar handleChange={handleChange} />
          <SearchResultsList results={results} />
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
<<<<<<< HEAD
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
        
       
=======


      </div>
>>>>>>> bf40c45a27e478831da52a363ea042be840625cd
    </div>
  )
}
}
export default SearchPage