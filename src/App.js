import { MainBar, AddButton, BlogPart } from "./Component/Constants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage/LandingPage";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup.jsx";
import Home from "./Component/Pages/Home";
import Answer from "./Component/Answer/Answer";
import Search from "../src/Component/SearchPage/SearchPage.jsx";
import Settings from "../src/Component/Settings/SettingsMenu";
import MyDetails from "../src/Component/Settings/MyDetails.js";
import Security from "../src/Component/Settings/Security.js";
import Email from "../src/Component/Settings/Email.js";
import Password from "../src/Component/Settings/Password.js";
import DeleteAccount from "./Component/Settings/DeleteAccount";
import UploadPage from "./Component/UploadPage/UploadPage";
import BlogPage from "./Component/BlogPage/BlogPage.js";
import AnsweringPage from "./Component/AnsweringPage/AnsweringPage";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { createContext } from "react";
import ProfilePage from "./Component/profile_page/ProfilePage";
import SearchResults from "./Component/SearchResults/SearchResults";
import { CookiesProvider } from "react-cookie";
import OTP from "./Component/OTP/OTP.jsx";
import Cropper from "./Component/UploadPage/Cropper";
import Code from "./Code/Code";
import UnSplash from "./Component/UnSplash/UnSplash";
import UploadFollow from "./Component/UploadFollow/UploadFollow";
import UploadBlog from "./Component/UploadBlog/UploadBlog";
import UploadSection from "./Component/UploadBlog/UploadSection";
import LoginPage from "./Component/LoginPage/LoginPage";
import SignUp from "./Component/SignUp/SignUp";
import UploadAnswer from "./Component/UploadAnswer/UploadAnswer";
import ForgetPswd from "./Component/ForgetPassword/ForgetPassword";
import ThirdPage from "./Component/Pages/ThirdPage";
import BlogRead from "./Component/BlogRead/BlogRead";
import FourthPage from "./Component/Pages/FourthPage";
import Test from "./Component/Landing/Test";
import Wallet from "./Component/Wallet/Wallet";
import MainAnswer from "./Component/AnsweringPage/MainAnswer";
import GPTInterface from "./Component/GPT/GPTInterface";
import GPT4 from "./Component/GPT/GPT4";
import ContactUs from "./Component/ContactUs";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import Refund from "./Component/Refund";
import Ship from "./Component/Ship";
import TAndC from "./Component/TAndC";
import StoreComponent from "./Component/Store/StoreComponent";
import PasswordReset from "./Component/Pages/PasswordReset";
import YourDen from "./Component/YourDen/YourDen";
import Categories from "./Component/Category/Categories";
export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="body">

      <CookiesProvider>
                <Router>
                <ThemeContext.Provider >
                    <Routes>
                        <Route path='/' element = {<Test />}></Route>
                    </Routes> 
                    </ThemeContext.Provider>
                </Router>
                </CookiesProvider>
    </div>
  );
}

export default App;
