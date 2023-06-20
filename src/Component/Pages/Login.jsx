import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import ProgressPassword from '../Indicators/ProgressPassword';
import LoginDesign from '../../Assets/LoginDesign.svg';
import "../../styles/Sheets/Login.css"
import Navbar from '../Navbar'
function Login() {
    const [message, setMessage] = useState("");
    const [userMsg, setUserMsg] = useState("");
    const [CPass, setCPass] = useState("");
    const [prompt, setPrompt] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [focus, setFocus] = useState(false);
    const [focus1, setFocus1] = useState(false);
    const [focus2, setFocus2] = useState(false);
    const [focus3, setFocus3] = useState();
    const [focus4, setFocus4] = useState(false);
    const [focus5, setFocus5] = useState(false);
    const [checks, setChecks] = useState({
        letterCheck: false,
        mailCheck: false,
        smallCheck: false,
        CapsCheck: false,
        SpecialChar: false,
        lengthCheck: false,
        numCheck: false,
        letChk: false,

    })
    // Confirm password method
    const passwordInput = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    function verifyPassword() {
        if (passwordInput.value !== confirmPassword.value) {
            setCPass("*Passwords do not match");
        } else {
            setCPass("");
        }
    }
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

    const handleOnFocus4 = () => {
        setFocus4(true);
    }
    const handleOnBlur4 = () => {
        setFocus4(false);
    }
    const handleOnFocus5 = () => {
        setFocus5(true);
    }
    const handleOnBlur5 = () => {
        setFocus5(false);
    }
    //other Implementation
    // FirstName
    var firstName = document.getElementById("firstname");
    if (firstName) {
        firstName.addEventListener('input', function (e) {
            var currentValue = e.target.value;
            const regEx = /^[a-zA-Z]{1,10}$/
            if (regEx.test(currentValue)) {
                setLastName("");
            } else if (!regEx.test(currentValue)) {
                setLastName("*This is not the first name")
            } else {
                setLastName("");
            }
        })
    }
    var firstName = document.getElementById("lastname");
    if (firstName) {
        firstName.addEventListener('input', function (e) {
            var currentValue = e.target.value;
            const regEx = /^[a-zA-Z]{1,10}$/
            if (regEx.test(currentValue)) {
                setFirstName("");
            } else if (!regEx.test(currentValue)) {
                setFirstName("*This is not the last name")
            } else {
                setFirstName("");
            }
        })
    }

    var userName = document.getElementById("username");
    if (userName) {
        userName.addEventListener('input', function (e) {
            var currentValue = e.target.value;
            const regEx = /^[a-zA-Z]{1,10}$/
            if (regEx.test(currentValue)) {
                setUserMsg("");
            } else if (!regEx.test(currentValue)) {
                setUserMsg("*Invalid User Name")
            } else {
                setUserMsg("");
            }
        })
    }
    var email1 = document.getElementById("email1");
    if (email1) {
        email1.addEventListener('input', function (e) {
            var currentValue = e.target.value;
            const regEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/
            if (regEx.test(currentValue)) {
                setMessage("");
            } else if (!regEx.test(currentValue)) {
                setMessage("*Email is not valid");
            } else {
                setMessage("");
            }
        })
    }
    const handleEmail = (e) => {
        const { value } = e.target;
        const mailCheck = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/.test(value);
        setChecks({
            mailCheck,
        });
    }
    const handleOnBlur3 = () => {
        setFocus3(false);

    }
    const handlePassword = (e) => {
        const { value } = e.target;
        const smallCheck = /[a-z]/.test(value);
        const CapsCheck = /[A-Z]/.test(value);
        const SpecialChar = /[^\w\s]/.test(value);
        const numCheck = /\d/.test(value);
        const lengthCheck = /.{8,}$/.test(value);
        setChecks({
            smallCheck,
            CapsCheck,
            SpecialChar,
            numCheck,
            lengthCheck,
        })
    }

    return (
        <div className='Outer'>

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
                        <p>Already have an account? <a href='/signup' className='log'>Log in</a></p>
                    </div>
                    <div className='name'>
                        <div className='first'>
                            <div><h5>First Name*</h5></div>
                            <div>
                                <form action="firstname"><input type="text"
                                    id="firstname"
                                    onFocus={handleOnFocus3}
                                    onBlur={handleOnBlur3}
                                    placeholder='Enter first name'
                                /></form>
                                {focus3 ? null : <p style={{
                                    color: "#ff0000",
                                    fontSize: "10px",
                                    paddingLeft: "70px",
                                }}>{LastName}</p>}
                            </div>
                        </div>

                        <div className='last'>
                            <div><h5>Last Name*</h5></div>
                            <div><form action="lastname"><input id="lastname"
                                onFocus={handleOnFocus4}
                                onBlur={handleOnBlur4}
                                type="text"
                                placeholder='Enter last name'
                            /></form>
                                {/* {focus4 ?( <ProgressBar letterFlag = {checks.letterCheck ? true : false} />): null} */}
                                {focus4 ? null : <p style={{
                                    color: "#ff0000",
                                    fontSize: "10px",
                                    paddingLeft: "70px",
                                }}>{FirstName}</p>}
                            </div>
                        </div>

                    </div>
                    <div >
                    </div>

                    <div className='email'>
                        <div><h5>Email*</h5></div>
                        <div><form action="" ><input id="email1"
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            type="text" placeholder='Enter your email address' onKeyUp={handleEmail}
                        /></form>
                            {focus ? null : <p style={{
                                color: "#ff0000",
                                fontSize: "10px",
                                paddingLeft: "10px",
                            }}>{message}</p>}
                        </div>

                    </div>
                    <div className='email'>
                        <div><h5>Username*</h5></div>
                        <div><form action="" ><input id="username"
                            onFocus={handleOnFocus1}
                            onBlur={handleOnBlur1}
                            type="text"
                            placeholder='Enter your Username'
                        />
                        </form>
                        </div>
                    </div>
                    {focus1 ? null : <p style={{
                        color: "#ff0000",
                        fontSize: "10px",
                        paddingLeft: "10px",
                    }}> {userMsg}</p>}
                    <div className='name'>
                        <div className='first'>
                            <div><h5>Password*</h5></div>
                            <div><form action=""><input type="text"
                                id="password"
                                onFocus={handleOnFocus2}
                                onBlur={handleOnBlur2}
                                placeholder='Enter your password'
                                onKeyUp={handlePassword}
                            /></form>
                                {focus2 ? <ProgressPassword
                                    smallCheckFlag={checks.smallCheck ? true : false}
                                    CapsCheckFlag={checks.CapsCheck ? true : false}
                                    SpecialCharFlag={checks.SpecialChar ? true : false}
                                    numCheckFlag={checks.numCheck ? true : false}
                                    lengthCheckFlag={checks.lengthCheck ? true : false}
                                /> : null}

                            </div>
                        </div>

                        <div className='last'>
                            <div><h5>Confirm Password*</h5></div>
                            <div><form action=""><input
                                type="password"
                                onFocus={handleOnFocus5}
                                onBlur={handleOnBlur5}
                                placeholder='Re-Enter your password'
                                id='confirmPassword'
                                onKeyUp={verifyPassword}
                            /></form>
                                {focus5 ? null : <p style={{
                                    color: "#ff0000",
                                    fontSize: "10px",
                                    paddingLeft: "70px",
                                }}>{CPass}</p>}
                            </div>
                        </div>
                    </div>
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
                                <button className='facebook'>Sign up with FaceBook</button>
                            </div>
                            <div className='common'>
                                <button className='google'>Sign up with Google</button>
                            </div>
                            <div className='common'>
                                <button className='apple'>Sign up with Apple</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='img-container'>
                <img className='img-c' src={LoginDesign} />
            </div>

        </div>

    )
}


export default Login;