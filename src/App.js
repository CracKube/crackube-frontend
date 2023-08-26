import { MainBar, AddButton, BlogPart } from './Component/Constants'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage/LandingPage";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup.jsx";
import Home from "./Component/Pages/Home";

import Search from "../src/Component/SearchPage/SearchPage.jsx";
import Settings from '../src/Component/Settings/SettingsMenu';
import MyDetails from '../src/Component/Settings/MyDetails.js';
import Security from '../src/Component/Settings/Security.js';
import Email from '../src/Component/Settings/Email.js';
import Password from '../src/Component/Settings/Password.js';
import DeleteAccount from './Component/Settings/DeleteAccount';
import UploadPage from './Component/UploadPage/UploadPage';
import BlogPage from './Component/BlogPage/BlogPage.js';
import AnsweringPage from './Component/AnsweringPage/AnsweringPage';
import {useAuth0} from '@auth0/auth0-react';
import { useState } from 'react';
import { createContext } from 'react'
import ProfilePage from './Component/profile_page/ProfilePage';
import SearchResults from './Component/SearchResults/SearchResults';
import {CookiesProvider} from 'react-cookie'
import OTP from './Component/OTP Page/OTP';
import Cropper from './Component/UploadPage/Cropper';
import UnSplash from './Component/UnSplash/UnSplash';
export const ThemeContext = createContext(null);


function App() {
    const [theme, setTheme] = useState("light")
    
    return (
            <div className="body">
                <CookiesProvider>
                <AddButton />
                <Router>
                <ThemeContext.Provider >
                    <Routes>
                        <Route path="/" element={<LandingPage />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/otp" element={<OTP />}> </Route>
                        <Route path="/search" element={<Search theme = {theme} setTheme = {setTheme}/>} ></Route>
                        <Route path="/settings" element={<Settings  theme = {theme} setTheme = {setTheme}/>}></Route>
                        <Route path="/my-details" element={<MyDetails theme = {theme} setTheme = {setTheme}/>}></Route>
                        <Route path="/security" element={<Security theme = {theme} setTheme = {setTheme}/>}></Route>
                        <Route path="/email" element={<Email theme = {theme} setTheme = {setTheme}/>}></Route>
                        <Route path = "/profile" element = {<ProfilePage theme = {theme} setTheme = {setTheme}/>}></Route>
                        <Route path="/password" element={<Password theme = {theme} setTheme = {setTheme}/>}></Route>
                        <Route path="/blog/:id" element={<BlogPage theme = {theme} setTheme = {setTheme}/>}></Route>
                        <Route path="/delete-account" element={<DeleteAccount theme = {theme} setTheme = {setTheme} />}></Route>
                        <Route path= '/answer' element = {<AnsweringPage theme = {theme} setTheme = {setTheme} />}></Route>
                        <Route path= '/upload' element = {<UploadPage/>}></Route>
                        <Route path = '/search-results' element = {<SearchResults theme = {theme} setTheme = {setTheme}/>}></Route>
                        <Route path = '/unsplash' element = {<UnSplash/>}></Route>
                    </Routes>
                    </ThemeContext.Provider>
                </Router>
                </CookiesProvider>
            </div>
    );
}

export default App;