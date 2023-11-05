import React from 'react'

const Popup = (props) => {
  return ( props.trigger ) ? (
    <div className= {props.otp  ? 'modal-otp-settings' : 'modal-settings'} >
        <div>
            {props.children}
        </div>
       
    </div>
    ) : ( " ")
}

export default Popup