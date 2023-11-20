import { createContext, useState } from "react";
import { CookiesProvider } from "react-cookie";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Search from "../src/Component/SearchPage/SearchPage.jsx";
import Email from "../src/Component/Settings/Email.js";
import MyDetails from "../src/Component/Settings/MyDetails.js";
import Password from "../src/Component/Settings/Password.js";
import Security from "../src/Component/Settings/Security.js";
import Settings from "../src/Component/Settings/SettingsMenu";
import Code from "./Code/Code";
import Answer from "./Component/Answer/Answer";
import MainAnswer from "./Component/AnsweringPage/MainAnswer";
import BlogPage from "./Component/BlogPage/BlogPage.js";
import BlogRead from "./Component/BlogRead/BlogRead";
import Categories from "./Component/Category/Categories";
import ContactUs from "./Component/ContactUs";
import ForgetPswd from "./Component/ForgetPassword/ForgetPassword";
import GPT4 from "./Component/GPT/GPT4";
import GPTInterface from "./Component/GPT/GPTInterface";
import Test from "./Component/Landing/Test";
import OTP from "./Component/OTP/OTP.jsx";
import FourthPage from "./Component/Pages/FourthPage";
import Home from "./Component/Pages/Home";
import PasswordReset from "./Component/Pages/PasswordReset";
import Signup from "./Component/Pages/Signup.jsx";
import ThirdPage from "./Component/Pages/ThirdPage";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import Refund from "./Component/Refund";
import SearchResults from "./Component/SearchResults/SearchResults";
import DeleteAccount from "./Component/Settings/DeleteAccount";
import Ship from "./Component/Ship";
import SignUp from "./Component/SignUp/SignUp";
import StoreComponent from "./Component/Store/StoreComponent";
import TAndC from "./Component/TAndC";
import UnSplash from "./Component/UnSplash/UnSplash";
import UploadAnswer from "./Component/UploadAnswer/UploadAnswer";
import UploadBlog from "./Component/UploadBlog/UploadBlog";
import UploadSection from "./Component/UploadBlog/UploadSection";
import UploadFollow from "./Component/UploadFollow/UploadFollow";
import Cropper from "./Component/UploadPage/Cropper";
import UploadPage from "./Component/UploadPage/UploadPage";
import Wallet from "./Component/Wallet/Wallet";
import YourDen from "./Component/YourDen/YourDen";
import ProfilePage from "./Component/profile_page/ProfilePage";
import { ThemeProvider } from "./Context/ThemeContext.js";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="body">
      <CookiesProvider>
        <Router>
          <ThemeContext.Provider>
            <ThemeProvider>
              <Routes basename = '/'>
                <Route path="/" exact Component={Test}></Route>
                <Route path="/signup" Component={SignUp}></Route>
                <Route path="/login" exact Component={Signup}></Route>
                <Route
                  path="/forgetpassword"
                  exact
                  Component={ForgetPswd}
                ></Route>
                <Route path="/home" exact Component={Home}></Route>
                <Route path="/otp" exact Component={OTP}>
                  {" "}
                </Route>
                <Route path="/search" exact Component={Search}></Route>
                <Route path="/settings" exact element={<Settings />}></Route>
                <Route path="/my-details" element={<MyDetails />}></Route>
                <Route path="/security" element={<Security />}></Route>
                <Route path="/email" element={<Email />}></Route>
                <Route path="/profile/:id" element={<ProfilePage />}></Route>
                <Route path="/password" element={<Password />}></Route>
                <Route path="/blog/:id" Component={BlogPage} />
                <Route
                  path="/delete-account"
                  element={<DeleteAccount />}
                ></Route>
                <Route path="/answering/:id" element={<MainAnswer />}></Route>
                <Route path="/upload" element={<UploadPage />}></Route>
                <Route
                  path="/search-results"
                  element={<SearchResults />}
                ></Route>
                <Route path="/unsplash" element={<UnSplash />}></Route>
                <Route path="/track" element={<UploadFollow />}></Route>
                <Route path="/answer" element={<Answer />}></Route>
                <Route path="/code" element={<Code />}></Route>
                <Route path="/uploadBlogs" element={<UploadBlog />}></Route>
                <Route path="/uploadanswer" element={<UploadAnswer />}></Route>
                <Route path="/uploadSec" element={<UploadSection />}></Route>
                <Route path="/cropper" element={<Cropper />}></Route>
                <Route path="/third" element={<ThirdPage />}></Route>
                <Route path="/fourth" element={<FourthPage />}></Route>
                <Route path="/read" element={<BlogRead />}></Route>
                <Route path="/wallet" element={<Wallet />}></Route>
                <Route path="/gpt" element={<GPTInterface />}></Route>
                <Route path="/gpt4" element={<GPT4 />}></Route>
                <Route path="/contactUs" element={<ContactUs />}></Route>
                <Route
                  path="/privacypolicy"
                  element={<PrivacyPolicy />}
                ></Route>
                <Route
                  path="/refundandcancellation"
                  element={<Refund />}
                ></Route>
                <Route path="/shipanddelivery" element={<Ship />}></Route>
                <Route path="/termsandconditions" element={<TAndC />}></Route>
                <Route path="/store" element={<StoreComponent />}></Route>
                <Route
                  path="/passwordReset"
                  element={<PasswordReset />}
                ></Route>
                <Route path="/yourden" element={<YourDen />}></Route>
                <Route path="/test" element={<Categories />}></Route>
              </Routes>
            </ThemeProvider>
          </ThemeContext.Provider>
        </Router>
        <Router basename="/chat">
          <Route path="/gpt" element={<GPTInterface />}></Route>
          <Route path="/gpt4" element={<GPT4 />}></Route>
        </Router>
      </CookiesProvider>
    </div>
  );
}

export default App;
