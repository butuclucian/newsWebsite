import React, { useEffect, useState, lazy, Suspense } from 'react'
import Hero from '../components/Hero'

const NewsSection = lazy(() => import('../components/NewsSection'))
const SportsSection = lazy(() => import('../components/SportsSection'))

const Home = () => {
  useEffect(() => {
    import('../components/NewsSection')
    import('../components/SportsSection')
  }, [])


  return (
    <div className="">
      <Hero />

      <Suspense fallback={<div className="text-white text-center">loading...</div>}>
        <NewsSection />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center">loading...</div>}>
        <SportsSection />
      </Suspense>
    </div>
  )
}

export default Home
