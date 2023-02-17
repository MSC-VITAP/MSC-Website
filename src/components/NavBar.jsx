import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoNoFill.svg'

function NavBar() {

  return (
    <div className={`bg-transparent `} >
      <nav className="shadow flex">
        <img className='pl-48 h-20 m-2 justify-start' src={logo} />
        <ul className="pr-48 container flex items-center justify-end font-bold">
          <li className="text-[#0C1821] hover:text-white dark:text-[#CCC9DC] mx-1.5">
            <Link to='/' >Home</Link>
          </li>
          <li className="text-[#0C1821] hover:text-white dark:text-[#CCC9DC] mx-1.5">
            <Link to='/pageunderconstruction' >Events</Link>
          </li>
          <li className="text-[#CCC9DC] hover:bg-white dark:text-[#0C1821] mx-1.5 bg-[#CCC9DC] px-4 py-2.5 rounded-xl">
            <Link to='/members/login' >Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar