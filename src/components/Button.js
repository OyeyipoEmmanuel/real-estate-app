import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-black text-white px-5 py-2 rounded-md hover:bg-transparent hover:border hover:border-black hover:text-black hover:shadow-2xl cursor-pointer hover:transition-all hover:duration-200'>{props.btnName}</button>
  )
}

export default Button