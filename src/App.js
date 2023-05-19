
import {MainBar, AddButton, BlogPart} from './Component/Constants'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LandingPage from "./Component/Pages/LandingPage";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup.jsx";
import Home from "./Component/Pages/Home";
import OTP  from "../src/Component/ForgotPassword/ForgotPassword.js"
import Search from "../src/Component/SearchPage/SearchPage.jsx";
import BlogPage from './Component/BlogPage/BlogPage';
import SettingsMenu from './Component/Settings/SettingsMenu';
import MyDetails from './Component/Settings/MyDetails';
import Security from './Component/Settings/Security';
import Email from './Component/Settings/Email';
import Password from './Component/Settings/Password.js';

function App() {
  return (
    <>
      <div className="body">
        <AddButton />
        <Router>
            <Routes>
              <Route path="/" element={<LandingPage/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path = "/otp" element= {<OTP/>}> </Route>
              <Route path = "/search" element = {<Search/>} ></Route>
              <Route path = "/blog" element = {<BlogPage/>} ></Route>
              <Route path = "/settings" element = {<SettingsMenu/>}></Route>
              <Route path='/my-details' element={<MyDetails/>}></Route>
              <Route path='/security' element= {<Security/>}> </Route>
              <Route path='/email' element = {<Email/>}></Route>
              <Route path='/password' element = {<Password/>}></Route>
              <Route path=''></Route>
            </Routes>
        </Router>
        {/* <MainBar /> */}
      </div>
    </>
  );
}

export default App;