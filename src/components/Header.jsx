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
            <Link to="/" className='pr-8 font-extrabold font-5xl cursor-pointer'>Home</Link>
            <Link to="/" className='pr-8 font-extrabold font-5xl cursor-pointer'>Marketplace</Link>
            <Link to="/" className='pr-8 font-extrabold font-5xl cursor-pointer'>Create</Link>
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
