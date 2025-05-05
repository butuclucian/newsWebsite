import React, { useEffect,useState,lazy, Suspense } from 'react'
import Hero from '../components/Hero'

const NewsSection = lazy(() => import('../components/NewsSection'))
const SportsSection = lazy(() => import('../components/SportsSection'))

const Home = () => {
  useEffect(() => {

    // Preîncarcă componentele în fundal
    import('../components/NewsSection')
    import('../components/SportsSection')
  }, [])


  return (
    <div className="">
      <Hero />
      
      <Suspense fallback={<div className="text-white text-center">Se încarcă noutățile...</div>}>
        <NewsSection />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center">Se încarcă secțiunea sport...</div>}>
        <SportsSection />
      </Suspense>
    </div>
  )
}

export default Home
