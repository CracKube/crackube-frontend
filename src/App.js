import { MainBar, AddButton, BlogPart } from './Component/Constants'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/Pages/LandingPage";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup.jsx";
import Home from "./Component/Pages/Home";
import OTP from "../src/Component/ForgotPassword/ForgotPassword.js"
import Search from "../src/Component/SearchPage/SearchPage.jsx";
import Settings from '../src/Component/Settings/SettingsMenu';
import MyDetails from '../src/Component/Settings/MyDetails.js';
import Security from '../src/Component/Settings/Security.js';
import Email from '../src/Component/Settings/Email.js';
import Password from '../src/Component/Settings/Password.js';
import DeleteAccount from './Component/Settings/DeleteAccount';
import UploadPage from './Component/UploadPage/UploadPage';
import BlogPage from './Component/BlogPage/BlogPage.js';
function App() {
    return (
        <>
            <div className="body">
                <AddButton />
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/otp" element={<OTP />}> </Route>
                        <Route path="/search" element={<Search />} ></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                        <Route path="/my-details" element={<MyDetails />}></Route>
                        <Route path="/security" element={<Security />}></Route>
                        <Route path="/email" element={<Email />}></Route>
                        <Route path="/password" element={<Password />}></Route>
                        <Route path="/blog/:id" element={<BlogPage />}></Route>
                        <Route path="/delete-account" element={<DeleteAccount />}></Route>
                        <Route path="/upload" element={<UploadPage />}></Route>

                    </Routes>

                </Router>
                {/* <MainBar /> */}
            </div>
        </>
    );
}

export default App;