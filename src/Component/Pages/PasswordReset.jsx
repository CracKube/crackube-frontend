import React, { useEffect } from 'react'
import { useSearchParams, useParams } from 'react-router-dom';
import { useState } from 'react';
const PasswordReset = () => {
    const [searchParams, setSearchParams] = useSearchParams("");
    const pass = 'joseDob1968*'
    const handleReset = async () => {
        const response = await fetch(
            "https://crackube-backend-test.onrender.com/auth/resetPassword",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `token=${searchParams.get('token')}&password=${pass}&userId=${searchParams.get('id')}`
            }
          );
            console.log(response)
    }
    useEffect(() => {
        
        handleReset();
    }, [])
  return (
    <div>
        <p>Redirecting</p>
    </div>
  )
}

export default PasswordReset