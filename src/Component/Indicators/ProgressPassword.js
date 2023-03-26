import React, { useEffect } from 'react'
import { useState } from 'react';


const ProgressPassword = ({
    smallCheckFlag,
    CapsCheckFlag,
    SpecialCharFlag,
    numCheckFlag,
    lengthCheckFlag,
}) => {
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(0);
    const [comments, setComments] = useState(0);

    let count1 = 0;
    useEffect(() => {
        console.log(
            smallCheckFlag,
            CapsCheckFlag,
            SpecialCharFlag,
            numCheckFlag,
            lengthCheckFlag);

            const A  = [ smallCheckFlag,
                CapsCheckFlag,
                SpecialCharFlag,
                numCheckFlag,
                lengthCheckFlag];
                setCount(0);
                for(let i = 0 ; i < A.length; i++) {
                    if(A[i] === true){
                        count1 = count1 + 1;
                    }
                }
                if(count1 == 0) {
                    setProgress(0);
                    setColor("#ff0000");
                    setComments("Very Weak");
                }
                if(count1 == 1){
                    setProgress(20);
                    setColor("#ff0000");
                    setComments("Very Weak");
                }
                if(count1 == 2){
                    setProgress(40);
                    setColor("#ff6600")
                    setComments("weak");
                }
                if(count1 == 3){
                    setProgress(60);
                    setColor("#ff6600");
                    setComments("Average")
                }
                if(count1 == 4){
                    setProgress(80);
                    setColor("#ff6600");
                    setComments("Good")
                }
                if(count1 == 5){
                    setProgress(100);
                    setColor("#34b233");
                    setComments("Great!")
                }
                console.log(progress);
        // if(smallCheckFlag === true && progress < 100){
        //     setProgress(progress + 20);
        // }
        //  if (smallCheckFlag === false && progress > 20) {
        //     setProgress(progress - 20);
        // }
        // if(CapsCheckFlag === true && progress < 100) {
        //     setProgress(progress + 20);
        // }
        //  if (CapsCheckFlag === false && progress > 20) {
        //     setProgress(progress - 20);
        // }
        // if(SpecialCharFlag === true && progress < 100){
        //     setProgress(progress + 20);
        // }
        //  if (SpecialCharFlag === false && progress > 20) {
        //     setProgress(progress - 20);
        // }
        // if(numCheckFlag === true && progress < 100) {
        //     setProgress(progress + 20);
        // }
        //  if (numCheckFlag === false && progress > 20) {
        //     setProgress(progress - 20)
        // }
        // if(lengthCheckFlag === true && progress < 100){
        //     setProgress(progress + 20);
        // }
        //  if (lengthCheckFlag === false && progress > 20) {
        //     setProgress(progress - 20)
        // }

    }, [smallCheckFlag,CapsCheckFlag,SpecialCharFlag,numCheckFlag,lengthCheckFlag])
    return (
        <div style={{
            position: 'relative',
            top: "10px",
            left: "10px",
            width: "150px",
            height: "5px",
            borderRadius: "100px",
            backgroundColor: "#CECECE",

        }} className='prog'>
            <div style={{
                position: 'relative',
                right: "7px",
                height: "5px",
                borderRadius: "100px",
                width: `${progress}%`,
                backgroundColor: `${color}`,
                transition: "width 0.5s"
            }}> </div>
            <div> <p style={{
                color : `${color}`,
                paddingLeft: "80px",
                paddingTop: "5px",
                fontSize: "10px",
                paddingBottom : "130px",
            }}>*{comments}</p> </div>
        </div>
    )
}

export default ProgressPassword;