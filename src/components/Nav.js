import React from 'react'
import logo from "../assets/Images/icon.png"
import Button from './Button'

const Nav = () => {
  return (
    <div className='px-6 md:px-12 flex flex-row items-center justify-between py-3'>
        <span className='flex flex-row items-center'>
           <img src={logo} alt='logo' className=''/>
           <h1 className='text-2xl text-orange-600 font-bold'>DLHomes</h1>
        </span>

        <span className='hidden md:flex flex-row md:space-x-8 lg:space-x-16'>
            <a href='/' className='hover:text-opacity-85 hover:transition-all duration-200 text-black'>Home</a>
            <a href='/' className='hover:text-opacity-85 hover:transition-all duration-200 text-black'>About</a>
            <a href='/' className='hover:text-opacity-85 hover:transition-all duration-200 text-black'>Agents</a>
            <a href='/' className='hover:text-opacity-85 hover:transition-all duration-200 text-black'>Property</a>
            <a href='/' className='hover:text-opacity-85 hover:transition-all duration-200 text-black'>Blog</a>
        </span>

        <span>
            <Button btnName="Login"/>
        </span>

    </div>
  )
}

export default Nav