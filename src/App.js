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

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="body">

      <CookiesProvider>
        <Router>
          <ThemeContext.Provider >
            <Routes>
              <Route path='/' element={<Test />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/login" element={<Signup />}></Route>
              <Route path='/forgetpassword' element={<ForgetPswd />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/otp" element={<OTP />}> </Route>
              <Route path="/search" element={<Search theme={theme} setTheme={setTheme} />} ></Route>
              <Route path="/settings" element={<Settings theme={theme} setTheme={setTheme} />}></Route>
              <Route path="/my-details" element={<MyDetails theme={theme} setTheme={setTheme} />}></Route>
              <Route path="/security" element={<Security theme={theme} setTheme={setTheme} />}></Route>
              <Route path="/email" element={<Email theme={theme} setTheme={setTheme} />}></Route>
              <Route path="/profile" element={<ProfilePage theme={theme} setTheme={setTheme} />}></Route>
              <Route path="/password" element={<Password theme={theme} setTheme={setTheme} />}></Route>
              <Route path="/blog/:id" element={<BlogPage theme={theme} setTheme={setTheme} />}></Route>
              <Route path="/delete-account" element={<DeleteAccount theme={theme} setTheme={setTheme} />}></Route>
              <Route path='/answering/:id' element={<MainAnswer theme={theme} setTheme={setTheme} />}></Route>
              <Route path='/upload' element={<UploadPage />}></Route>
              <Route path='/search-results' element={<SearchResults theme={theme} setTheme={setTheme} />}></Route>
              <Route path='/unsplash' element={<UnSplash />}></Route>
              <Route path='/track' element={<UploadFollow />}></Route>
              <Route path='/answer' element={<Answer />}></Route>
              <Route path='/code' element={<Code />}></Route>
              <Route path='/uploadBlogs' element={<UploadBlog />}></Route>
              <Route path='/uploadanswer' element={<UploadAnswer />}></Route>
              <Route path='/uploadSec' element={<UploadSection />}></Route>
              <Route path='/cropper' element={<Cropper />}></Route>
              <Route path='/third' element={<ThirdPage />}></Route>
              <Route path='/fourth' element={<FourthPage />}></Route>
              <Route path='/read' element={<BlogRead theme={theme} setTheme={setTheme} />}></Route>
              <Route path='/wallet' element={<Wallet />}></Route>
              <Route path='/gpt' element={<GPTInterface />}></Route>
              <Route path='/gpt4' element={<GPT4 />}></Route>
              <Route path='/contactUs' element={<ContactUs />}></Route>
              <Route path='/privacypolicy' element={<PrivacyPolicy />}></Route>
              <Route path="/refundandcancellation" element={<Refund />}></Route>
              <Route path='/shipanddelivery' element={<Ship />}></Route>
              <Route path="/termsandconditions" element={<TAndC />}></Route>
              <Route path='/store' element={<StoreComponent />}></Route>
            </Routes>
          </ThemeContext.Provider>
        </Router>
      </CookiesProvider>
    </div>
  );
}

export default App;
