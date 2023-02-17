import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoNoFill.svg'
import useScroll from '../hooks/useScroll'

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className='nav-sticky nav' >
      <nav className="shadow flex justify-between">
        <img className='h-14 md:h-16 lg:h-20 ml-6 md:ml-20 lg:ml-48 m-2 justify-start' src={logo} />
        <ul className="hidden mr-8 md:mr-20 lg:mr-48 container md:flex items-center justify-end font-bold space-x-5">
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
        <div className='w-60 h-full shadow-md absolute'>
          <ul className="items-center justify-end font-bold text-center">
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
        </div>
        <button
          className="mr-8 flex items-center md:hidden px-2 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav >
    </div >
  )
}

export default NavBar