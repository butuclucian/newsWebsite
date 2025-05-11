import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import { assets } from '../assets/assets.js';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [savedArticles, setSavedArticles] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");


  const { user, logout } = useUser();
  const isAdmin = user && user.role === 'admin';

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#212121]/90 dark:bg-[#7e8082] backdrop-blur-md z-50 overflow-visible text-white rounded-2xl mt-4 max-w-[1200px] mx-auto font-medium max-h-[70px] sm:px-6 lg:px-8 fixed top-0 left-4 right-4 shadow-[0px_5px_15px_#0d0d0d] dark:shadow-amber-50">

      {/* Left logo */}
      <Link to='/' className="hidden md:flex items-start w-full max-w-[250px] gap-2">
        <img src={assets.logo} alt="Logo" className="w-12 h-12 rounded-full cursor-pointer object-cover" />
      </Link>

      {/* Mobile menu button */}
      <button onClick={() => setMobileMenuOpen(true)} type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-expanded={mobileMenuOpen}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='fixed top-0 left-0 w-full h-screen bg-black/80 text-2xl flex flex-col md:hidden items-center justify-center gap-8 font-medium text-white z-50 transition-all'>
          <button className="absolute top-4 left-8" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/news" onClick={() => setMobileMenuOpen(false)}>News</NavLink>
          <NavLink to="/sports" onClick={() => setMobileMenuOpen(false)}>Sports</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>

          {!user ? (
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-white/80 px-8 py-2 rounded-full text-black hover:bg-transparent hover:border border-white hover:text-white">Login</button>
            </Link>
          ) : null}
        </div>
      )}

      {/* Desktop nav links */}
      <nav className="hidden md:flex gap-10 text-lg tracking-wide items-center absolute left-1/2 transform -translate-x-1/2">
        <NavLink to="/" className="hover:text-[#EDE618]  hover:text-shadow-[0px_0px_50px_#EDE618] transition-all duration-100">Home</NavLink>
        <NavLink to="/news" className="hover:text-[#EDE618]  hover:text-shadow-[0px_0px_50px_#EDE618] transition-all duration-100">News</NavLink>
        <NavLink to="/sports" className="hover:text-[#EDE618]  hover:text-shadow-[0px_0px_50px_#EDE618] transition-all duration-100">Sports</NavLink>
        <NavLink to="/contact" className="hover:text-[#EDE618]  hover:text-shadow-[0px_0px_50px_#EDE618] transition-all duration-100">Contact</NavLink>
        {user && isAdmin && (
          <NavLink to="/admin">
            <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">Dashboard</button>
          </NavLink>
        )}


      </nav>

      {/* Right side - icons */}
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-[#EDE618]/40 dark:border-white hover:bg-white/10 dark:hover:bg-white/10 transition duration-300"
          aria-label="Toggle theme">
          <span
            key={theme} className="transition-all duration-300 ease-in-out transform scale-100 animate-fadeRotate">
            {theme === "dark" ? (
              // Sun icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M3 12H2m16.95 4.95l.71.71M4.34 4.34l-.71.71m0 13.9l.71-.71M19.66 4.34l-.71-.71M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              // Moon icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#EDE618] cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </span>
        </button>



        <NavLink to="/saved">
          <img
            src={theme === "dark" ? assets.savedWhite : assets.savedIcon}
            alt="Saved articles"
            className="w-8 h-8 cursor-pointer transition duration-300"
            onClick={() => setSavedArticles(!savedArticles)}
          />
        </NavLink>


        {user ? (
          <div onClick={() => setUserMenuOpen(!userMenuOpen)} className="w-12 h-12 rounded-full bg-gray-600 cursor-pointer">
            <img src={assets.admin || "/profile.jpg"} alt="User profile" className="w-full h-full rounded-full object-cover" />
          </div>
        ) : (
          <Link to="/login">
            <img src={theme === "dark" ? assets.userWhite : assets.userIcon} alt="Login icon" className="w-8 h-8 cursor-pointer" />
          </Link>
        )}

        {/* Dropdown menu when user is logged in */}
        {userMenuOpen && user && (
          <div className="absolute right-8 mt-52 w-40 bg-[#212121]/97 rounded-xl shadow-[0px_10px_40px_#0d0d0d] z-50 text-left cursor-pointer dark:bg-[#7e8082] dark:shadow-2xl">
            <NavLink to="/myaccount">
              <p className="block px-4 py-2 hover:bg-[#444] hover:rounded-t-xl" onClick={() => setUserMenuOpen(false)}>My Account</p>
            </NavLink>
            <NavLink to="/settings">
              <p className="block px-4 py-2 hover:bg-[#444]" onClick={() => setUserMenuOpen(false)}>Settings</p>
            </NavLink>
            <p className="block px-4 py-2 hover:bg-[#444] hover:rounded-b-xl" onClick={() => {
              localStorage.removeItem("user");
              setUserMenuOpen(false);
              window.location.reload();
            }}>Logout</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
