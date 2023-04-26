
import {MainBar, AddButton, BlogPart} from './Component/Constants'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LandingPage from "./Component/Pages/LandingPage";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup.jsx";
import Home from "./Component/Pages/Home";
import OTP  from "../src/Component/ForgotPassword/ForgotPassword.js"


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
            </Routes>
        </Router>
        {/* <MainBar /> */}
      </div>
    </>
  );
}

export default App;