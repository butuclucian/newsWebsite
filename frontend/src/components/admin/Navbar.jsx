import React, { useState, useRef, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className='fixed top-0 left-4 right-4 z-50 mt-4 bg-white backdrop-blur-md text-black max-h-[70px] px-6 py-4 sm:px-6 lg:px-8 shadow-md rounded'>
            <div className='relative flex items-center justify-between'>
                {/*---- left side ----*/}
                <div className='text-2xl font-bold'>
                    <a href="/">Admin Panel</a>
                </div>

                {/* ---- mid links ---- */}
                <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10'>
                    <NavLink to="/admin">
                        <a href="/admin" className='text-lg'>Dashboard</a>
                    </NavLink>
                    <NavLink to="/admin/add-article">
                        <a href="/admin/add-article" className='text-lg'>Add Article</a>
                    </NavLink>
                    <NavLink to="/admin/list-article">
                        <a href="/admin/list-article" className='text-lg'>List Articles</a>
                    </NavLink>
                </div>

                {/* right side ---- */}
                <div className='relative' ref={dropdownRef}>
                    <img src={assets.admin} alt="Admin" className='rounded-full h-12 w-12 object-cover cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
                    {isDropdownOpen && (
                        <div className='absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-2 z-50'>
                            <Link to="/" className='block px-4 py-2 text-sm hover:bg-gray-100'>Website</Link>
                            <button className='w-full text-left px-4 py-2 text-sm hover:bg-gray-100'> Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
