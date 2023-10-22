import React from 'react'
import error from '../assets/ErrorPage.png'

const ErrorPages = () => {
  return (
    <div className='flex flex-col items-center w-[60vw] ml-[15vw] mt-[10vh]'>
<img src={error} />
<h1 className='text-5xl font-bold text-center'>Page Not Found</h1>
    </div>
  )
}

export default ErrorPages