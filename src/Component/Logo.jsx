import React from 'react'

function Logo({cssClass}) {
    return (
        <div className= {cssClass}>
            <img src="" alt="logo" />
            <h1>CracKube</h1>
        </div>
    )
}

//default prop
Logo.defaultProps = {
    cssClass: 'logo',
}
export default Logo