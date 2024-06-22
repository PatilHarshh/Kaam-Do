import React from "react";
import Lottie from 'lottie-react';
import error from '../assets/error.json'
function Error(){
    return(
            <div className='flex justify-center items-center py-20'>
                <Lottie animationData={error}/>
            </div>   
    )
}
export default Error;