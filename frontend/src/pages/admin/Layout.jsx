import React from 'react'
import Navbar from '../../components/admin/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-white text-black min-h-screen flex flex-col flex-grow'>
      <Navbar />
      <div className='pt-24 px-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
