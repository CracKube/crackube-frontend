import React from 'react'
import Navbar from '../Navbar'
import { useState } from 'react';
import {Helmet} from 'react-helmet';

function Login() {
    const [message, setMessage] = useState("");
    const [userMsg, setUserMsg] = useState("");
    const [prompt, setPrompt] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [focus, setFocus] = useState(false);
    const [focus1, setFocus1] = useState(false);
    const [focus2, setFocus2] = useState(false);
    const [focus3, setFocus3] = useState(false);
    const [focus4, setFocus4] = useState(false);

    // handle Focus on inputs
    const handleOnFocus = () => {
        setFocus(true);
    }
    const handleOnBlur = () => {
        setFocus(false);
    }
    const handleOnFocus1 = () => {
        setFocus1(true);
    }
    const handleOnBlur1 = () => {
        setFocus1(false);
    }
    const handleOnFocus2 = () => {
        setFocus2(true);
    }
    const handleOnBlur2 = () => {
        setFocus2(false);
    }
    const handleOnFocus3 = () => {
        setFocus3(true);
    }
    const handleOnBlur3 = () => {
        setFocus3(false);
    }
    const handleOnFocus4 = () => {
        setFocus4(true);
    }
    const handleOnBlur4 = () => {
        setFocus4(false);
    }
    //other Implementation
    // FirstName
    var firstName = document.getElementById("firstname");
    if(firstName) {
        firstName.addEventListener('input' , function(e) {
            var currentValue = e.target.value;
            const regEx = /^[a-zA-Z]{1,10}$/
            if(regEx.test(currentValue)) {
                setFirstName("Strong First name");
            }else if (!regEx.test(currentValue) ){
                setFirstName("Invalid")
            }else {
                setFirstName("");
            }
        })
    }
    var lastName = document.getElementById("lastname");
    if(lastName) {
        lastName.addEventListener('input' , function(e) {
            var currentValue = e.target.value;
            const regEx = /^[a-zA-Z]{1,10}$/
            if(regEx.test(currentValue)) {
                setLastName("Strong Last Name");
            }else if (!regEx.test(currentValue) ){
                setLastName("Invalid")
            }else {
                setLastName("");
            }
        })
    }
    var userName = document.getElementById("username");
     if(userName){
     userName.addEventListener('input' , function(e) {
        var currentValue = e.target.value;
        const regEx = /^[a-zA-Z]{1,10}$/
        if(regEx.test(currentValue)) {
            setUserMsg("Strong User Name");
        }else if (!regEx.test(currentValue) ){
            setUserMsg("Invalid")
        }else {
            setUserMsg("");
        }
     })
    }
    var email1 = document.getElementById("email1");
    if(email1) {
        email1.addEventListener('input', function(e) {
            var currentValue = e.target.value;
            const regEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/
            if(regEx.test(currentValue)){
                setMessage("Email is valid");
            }else if(!regEx.test(currentValue))  {
                setMessage("Email is not valid");
            } else {
                setMessage("");
            }
        })
    }
    var password = document.getElementById("password")
    if(password) {
        password.addEventListener('input', function(e) {
            var currentValue = e.target.value;
            const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_222]).{8,}$/
            if(regEx.test(currentValue)) {
                setPrompt("Strong password");
            }else if (!regEx.test(currentValue) ){
                setPrompt("Password is weak")
            }else {
                setPrompt("");
            }
        })
    }
  return (
    
    <div className='out'>
        <Helmet>
        <meta 
        name='viewport' 
        content='width=device-width' />
        </Helmet>
    <div className='main'>
        <div className='box title'>
            <p>Create a Account<span className='dot'>.</span></p>
        </div>
        <div className='box'>
            <p>Already have an account? <a href='' className='log'>Log in</a></p>
        </div>
        <div className='name'>
            <div className='first'>
                <div><h5>First Name*</h5></div>
                <div><form action=""><input type="text" id = "firstname" onFocus={handleOnFocus3}
                onBlur = {handleOnBlur3} placeholder='Enter first name'/></form></div>
            </div>
            
            <div className='last'>
                <div><h5>Last Name*</h5></div>
                <div><form action=""><input id = "lastname" onFocus={handleOnFocus4}
                onBlur = {handleOnBlur4} type="text" placeholder='Enter last name' /></form></div>
            </div>
            
        </div>
        <div >
        <div className='first'>{focus3 ? FirstName : null}</div>
        <div className='last'>{focus4 ? LastName : null}</div>
        </div>
        
        <div className='email'>
            <div><h5>Email*</h5></div>
            <div><form action="" ><input id = "email1" onFocus={handleOnFocus} 
            onBlur = {handleOnBlur} type="text" placeholder='Enter your email address' on
            /></form></div>
            {focus ? message: null}
        </div>
        <div className='email'>
            <div><h5>Username*</h5></div>
            <div><form action="" ><input id = "username" onFocus={handleOnFocus1} 
            onBlur = {handleOnBlur1} type="text" placeholder='Enter your Username' 
            />
            </form>
            </div>
        </div>
        {focus1 ? userMsg : ""}
        <div className='name'>
            <div className='first'>
                <div><h5>Password*</h5></div>
                <div><form action=""><input id = "password" onFocus={handleOnFocus2}
                onBlur = {handleOnBlur2} type="text" placeholder='Enter your password'
                /></form></div>
            </div>
            
            <div className='last'>
                <div><h5>Confirm Password*</h5></div>
                <div><form action=""><input type="text" placeholder='Re-Enter your password' /></form></div>
            </div>
        </div>
        {focus2 ? prompt : null}
        <div className='info'>
            <h5>By Signing Up, you agree to <a href=''>terms of use</a> and<br></br> <a href=""> privacy statements.</a></h5>
        </div>
        <div className='button-div'>
            <button className='create-button'>Create Account</button>
        </div>
        <div className='separator'>
            <div className='left'>

            </div>
            <div>
                <p>or continue with</p>
            </div>
            <div className='left'>

            </div>
        </div>
        <div className='sign-button'>
            <div className='sign-in'>
                <div className='common'>
                <button className='facebook'>FaceBook</button>
                </div>
                <div className='common'>
                <button className='google'>Google</button>
                </div>
                <div className='common'>
                <button className='apple'>Apple</button>
                </div>
            </div>
    </div>
    </div>
    </div>
  )
}


export default Login;
