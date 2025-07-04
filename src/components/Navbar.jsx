import React, { useState } from 'react'
import { navLinks } from '../constants'
import { practical_logo2 } from '../assets'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className='w-full bg-white shadow-md fixed top-0 left-0 z-50'>
      {/* Main Navbar */}
      <div className='w-full flex items-center px-6 py-5 justify-between'>
        {/* Logo */}
        <Link to='/' className='flex items-center gap-4'>
          <img
            src={practical_logo2}
            alt='practical_logo2'
            className='w-[72px] h-[36px] sm:w-[80px] sm:h-[40px] md:w-[96px] md:h-[48px]'
          />
          <p className='text-black font-bold text-xl sm:text-2xl md:text-3xl'>Let's build it</p>
        </Link>

        {/* Menu Icon for Mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-24'>
          <ul className='flex items-center gap-8'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`font-semibold cursor-pointer transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-4'>
            <button className='text-gray-700 font-semibold hover:text-blue-500 transition-colors duration-300'>
              Sign Up
            </button>
            <button className='bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600 text-white transition-colors duration-300'>
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden px-6 pb-4'>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`font-semibold cursor-pointer transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                  onClick={toggleMenu}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='mt-4 flex flex-col gap-3'>
            <button className='text-gray-700 font-semibold hover:text-blue-500 transition-colors duration-300'>
              Sign Up
            </button>
            <button className='bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-600 text-white transition-colors duration-300'>
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
