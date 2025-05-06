import React, { use } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import News from './pages/News'
import Sports from './pages/Sports'
import Contact from './pages/Contact'
import MyAccount from './pages/MyAccount'
import Login from './pages/Login'
import ArticleDetail from './pages/ArticleDetail'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddArticle from './pages/admin/AddArticle'
import ListArticle from './pages/admin/ListArticle'
import Saved from './pages/Saved'
import Settings from './pages/Settings'

import { SavedArticlesProvider } from './context/SavedArticlesContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('/admin')

  return (
    <SavedArticlesProvider>
      <div className='bg-[#0d0d0d] text-white min-h-screen flex flex-col flex-grow'>
        {!isOwnerPath && <Navbar />}
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/sports' element={<Sports />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/saved' element={<Saved />} />
            <Route path='/login' element={<Login />} />
            <Route path='/article/:articleId' element={<ArticleDetail />} />

            <Route path='/admin' element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="add-article" element={<AddArticle />} />
              <Route path="list-article" element={<ListArticle />} />
            </Route>

          </Routes>
        </div>
        {!isOwnerPath && <Footer />}
      </div>
      <ToastContainer position="top-right" autoClose={2500} theme="dark" />
    </SavedArticlesProvider>
  )
}

export default App
