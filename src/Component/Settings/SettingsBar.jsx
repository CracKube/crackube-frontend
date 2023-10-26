import React from 'react'
import User from "../../Assets/ans-user.png";
const SettingsBar = ({clicked}) => {
    console.log(clicked)
    return (
        <>
            {clicked == 0 && (
                <div className="about-sep" >
                <div className="my-details">
                  <p>Edit Profile</p>
                  <p>Profile Photo</p>
                </div>
                <div className='prof-update'>
                    <div>
                        <img src= {User} alt="" />
                    </div>
                    <div>
                        <p>@sophiamargrete</p>
                        <p>change profile photo</p>
                    </div>
                </div>
                <div className='prof-upt-user'>
                    <p>Username</p>
                    <p>You can change only two times in 90 Days</p>

                </div>
                <div className='prof-upt-name'>
                    <p>Full Name</p>
                    <p>James Miller</p>
                </div>
              </div>
            )}
        </>
    )
}

export default SettingsBar