<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
=======
import React, {useEffect, useState} from 'react'
>>>>>>> 70f840b9dcfcfc6192f2e38bd0612c06cc156df4
import Search from '../../Assets/search.svg'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'

<<<<<<< HEAD
const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {
        results.map((result, id) => {
          return <div key={id}>{result}</div>
=======

const SearchBar = ({handleChange})=>{
  const [input, setInput ] = useState("");
  
  
    // const fecthData = (value) => {
    //   fetch("https://crackube-backend-test.onrender.com/questions/get").then((response) => response.json()).then(json =>{
    //     // console.log(json);
    //     const results = json.filter((user) => {
    //       return value && user && user.questionBody && user.questionBody.toLowerCase().includes(value)
    //     });
    //     setResults(results);
        
    //   } )
    // }

  return (
    <div className='Search'>
    <img src= {Search} alt="img" />    
    <input className='search-bar' 
    type="text" value={input} onChange={(e) => {setInput(e.target.value);handleChange(e.target.value)}}
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
          return <SearchResult result={result} key={id}/>
>>>>>>> 70f840b9dcfcfc6192f2e38bd0612c06cc156df4
        })
      }
    </div>
  )
}

<<<<<<< HEAD
function SearchPage() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [blogs, setBlogs] = useState([])
  const [questions, setQuestions] = useState([])
  const [users, setUsers] = useState([])
=======
const SearchResult =({result})=> {
  return (
  <div className='search-result'>
    
    <img className='search-list-icon'src= {Search} alt="img" />
    {result}</div>
  )

}
>>>>>>> 70f840b9dcfcfc6192f2e38bd0612c06cc156df4


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

<<<<<<< HEAD
=======
function SearchPage () {
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
  
>>>>>>> 70f840b9dcfcfc6192f2e38bd0612c06cc156df4
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
          <div className='Search'>
            <img src={Search} alt="img" />
            <input className='search-bar'
              type="text"
              placeholder='Search for anything'
              value={input}
              onChange={e => handleChange(e.target.value)}
            />
            <button className='search-button'>Search</button>
            <SearchResultsList results={results} />
          </div>
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


      </div>


=======
       {/* SearchBar */}
       <SearchBar handleChange={handleChange}/>
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
>>>>>>> 70f840b9dcfcfc6192f2e38bd0612c06cc156df4
    </div>

  )
}

export default SearchPage