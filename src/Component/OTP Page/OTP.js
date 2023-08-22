import LoginDesign from '../../Assets/LoginDesign.svg';
import Back from '../../Assets/Back.png';


import React, { useState, useEffect } from 'react';

const OTP = ({ length = 4 }) => {

    const [otp, setOTP] = useState(Array(length).fill(''));

    const handleChange = (index, value) => {
        if (!isNaN(value) && value !== '' && index < length) {
            const newOTP = [...otp];
            newOTP[index] = value;
            setOTP(newOTP);
        }
    };

    const handleKeyUp = (event, index) => {
        if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
            const newOTP = [...otp];
            newOTP[index - 1] = '';
            setOTP(newOTP);
        }
    };


    useEffect(() => {
        const onComplete = (otp) => {
            console.log('Your OTP is', otp);
            setOTP(Array(length).fill(''));
        };

        const focusNextInput = (index) => {
            if (index < length - 1) {
                const nextInput = document.getElementById(`input-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        };

        if (otp.some(val => val === '')) {
            const nextEmptyIndex = otp.findIndex(val => val === '');
            focusNextInput(nextEmptyIndex - 1);
        } else {
            onComplete(otp.join(''));
        }
    }, [otp, length]);


    const inputs = Array.from({ length }, (_, index) => (
        <input
            key={index}
            type="text"
            maxLength={1}
            value={otp[index]}
            onChange={e => handleChange(index, e.target.value)}
            onKeyUp={e => handleKeyUp(e, index)}
            id={`input-${index}`}
            className='BOX'
            inputMode='numeric'
            autoComplete='off'
        />
    ));

    // return <div className="otp-input">{inputs}</div>;
    return (
        <div className='main1'>
            <div className='Welcome'>
                <div className='BackButton'>
                    <button><img src={Back} alt="" /></button>
                </div>
                <p className='txt1'>Verification Code</p>
                <p className='req2'>
                    <p className='random'>Please enter 4-digit code sent to</p>
                    <br />
                    <p className='mailId'> abc@email.com</p>
                </p>
                <div className='codeBox'>
                    {inputs}
                </div>
                <p className='Code'>Didn't receive the code?</p>
                <div className='VerifyButton'>
                    <button>Receive new Code</button>
                </div>
            </div>
            <div className='Design'>
                <img className='img' src={LoginDesign} alt="" />
            </div >
        </div>
    )
};

export default OTP;
