import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { assets } from '../assets/assets.js'
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [savedArticles, setSavedArticles] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  // Verificăm dacă utilizatorul este logat folosind localStorage
  const { user, logout } = useUser();
  const isAdmin = user && user.role === 'admin'; // Verifică dacă utilizatorul este admin


  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#212121]/90 backdrop-blur-md z-50 overflow-visible text-white rounded-2xl mt-4 max-w-[1200px] mx-auto font-medium max-h-[70px] sm:px-6 lg:px-8 fixed top-0 left-4 right-4 shadow-[0px_5px_15px_#0d0d0d]">
      {/* ---- left side */}
      <Link to='/' className="hidden md:flex items-start w-full max-w-[250px] gap-2">
        <img src={assets.logo} alt="Logo" className="w-12 h-12 rounded-full cursor-pointer" />
      </Link>

      {/* --- mobile burger menu --- */}
      <button onClick={() => setMobileMenuOpen(true)} type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-expanded={mobileMenuOpen}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>

      {mobileMenuOpen && (
        <div className='fixed top-0 left-0 w-full h-screen bg-black/80 text-2xl flex flex-col md:hidden items-center justify-center gap-8 font-medium text-white transition-all duration-500 z-50'>
          {/* --- exit button */}
          <button className="absolute top-4 left-8" onClick={() => setMobileMenuOpen(false)}>
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* --- linkuri mobile --- */}
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
            <span className="hover:text-[#EDE618]">Home</span>
          </NavLink>
          <NavLink to="/news" onClick={() => setMobileMenuOpen(false)}>
            <span className="hover:text-[#EDE618]">News</span>
          </NavLink>
          <NavLink to="/sports" onClick={() => setMobileMenuOpen(false)}>
            <span className="hover:text-[#EDE618]">Sports</span>
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
            <span className="hover:text-[#EDE618]">Contact</span>
          </NavLink>
          {isAdmin && (
            <button className="border px-4 py-2 text-xl font-medium rounded-full cursor-pointer">Dashboard</button>
          )}
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
            <button className="bg-white/80 cursor-pointer px-8 py-2 rounded-full text-black font-medium hover:bg-transparent hover:border-1 border hover:text-white">Login</button>
          </Link>
        </div>
      )}

      {/* --- center nav --- */}
      <nav className="hidden md:flex gap-10 text-lg tracking-wide text-white items-center absolute left-1/2 transform -translate-x-1/2">
        <NavLink to="/">
          <a className="hover:text-[#EDE618] hover:text-shadow-[0px_0px_50px_#EDE618] hover:transition-all hover:duration-100">Home</a>
        </NavLink>
        <NavLink to="/news">
          <a href="#news" className="hover:text-[#EDE618] hover:text-shadow-[0px_0px_50px_#EDE618] hover:transition-all hover:duration-100">News</a>
        </NavLink>
        <NavLink to="/sports">
          <a href="#sports" className="hover:text-[#EDE618] hover:text-shadow-[0px_0px_50px_#EDE618] hover:transition-all hover:duration-100">Sports</a>
        </NavLink>
        <NavLink to="/contact">
          <a href="#contact" className="hover:text-[#EDE618] hover:text-shadow-[0px_0px_50px_#EDE618] hover:transition-all hover:duration-100">Contact</a>
        </NavLink>
        {isAdmin && (
          <NavLink to='/admin'>
            <button className='border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all'>
              Dashboard
            </button>
          </NavLink>
        )}
      </nav>

      {/* --- right side --- */}
      <div className="flex items-center gap-4">
        {/* ---- saved icon ---- */}
        <div className="relative cursor-pointer">
          <NavLink to='/saved'>
            <img src={assets.savedIcon} alt="Saved" className="w-8 h-8" onClick={() => setSavedArticles(!savedArticles)} />
          </NavLink>
        </div>

        {/* ---- user icon ---- */}
        {user ? (
          <div onClick={() => setUserMenuOpen(!userMenuOpen)} className="w-12 h-12 rounded-full bg-gray-600 cursor-pointer">
            <img src={assets.admin || "/profile.jpg"} alt="User" className="w-full h-full rounded-full" />
          </div>
        ) : (
          <div className="relative cursor-pointer">
            <Link to="/login">
              <img src={assets.userIcon} alt="user icon" />
            </Link>
          </div>
        )}

        {/* ---- user menu dropdown ---- */}
        {userMenuOpen && user && (
          <div className="absolute right-8 mt-45 w-40 bg-[#212121]/97 rounded-xl shadow-[0px_10px_40px_#0d0d0d] z-50 text-left">
            <NavLink to="/myaccount">
              <p href="/myaccount" className="block px-4 py-2 hover:bg-[#444] hover:rounded-t-xl" onClick={() => setUserMenuOpen(false)}>My Account</p>
            </NavLink>
            <p href="/settings" className="block px-4 py-2 hover:bg-[#444]" onClick={() => setUserMenuOpen(false)}>Settings</p>
            <p href="#" className="block px-4 py-2 hover:bg-[#444] hover:rounded-b-xl" onClick={() => {
              localStorage.removeItem("user");
              setUserMenuOpen(false);
              window.location.reload(); // sau navigate("/") dacă folosești react-router
            }}>Logout</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
