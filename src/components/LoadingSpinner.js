import React, { useEffect } from 'react'
import loadingGif from "../assets/gif/Dual Ring@1x-1.0s-200px-200px.gif"

const LoadingSpinner = (props) => {

  return (
    // <div className='mx-auto text-center text-6xl text-red-500'>{loadingGif}</div>
    <img src={loadingGif} className='text-center mx-auto' alt='loading spinner'/>
  )
}

export default LoadingSpinner