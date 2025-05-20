import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-[#010101]'>
      <div className='flex items-center justify-around'>
        <div className="image">
            <img src={logo} alt={logo} />
        </div>
        <div className="li_nks text-white flex justify-center">
            <Link to="/" className='pr-8 py-9 font-extrabold font-5xl cursor-pointer relative before:content-[] before:absolute before:block before:w-full before:h-[2px] before:bottom-5 before:left-0 before:bg-[#ffd335] before:scale-x-0 before:origin-top-left before:transition before:duration-300 hover:before:scale-x-100'>Home</Link>
            <Link to="/" className='pr-8 py-9 font-extrabold font-5xl cursor-pointer  relative before:content-[] before:absolute before:block before:w-full before:h-[2px] before:bottom-5 before:left-0 before:bg-[#ffd335] before:scale-x-0 before:origin-top-left before:transition before:duration-300 hover:before:scale-x-100'>Marketplace</Link>
            <Link to="/" className='pr-8 py-9 font-extrabold font-5xl cursor-pointer  relative before:content-[] before:absolute before:block before:w-full before:h-[2px] before:bottom-5 before:left-0 before:bg-[#ffd335] before:scale-x-0 before:origin-top-left before:transition before:duration-300 hover:before:scale-x-100'>Create</Link>
        </div>
        <div>
            <button className='pr-8 font-extrabold font-5xl bg-[#ffd335] px-6 py-4 rounded-full cursor-pointer hover:bg-[#ffe683] transition-colors duration-200 
    shadow-md hover:shadow-lg
    transform hover:scale-105
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-[#ffd335] focus:ring-opacity-50'>Connect wallet</button>
        </div>
      </div>
    </div>
  )
}

export default Header
