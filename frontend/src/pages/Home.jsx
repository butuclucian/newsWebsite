import React, {useState} from 'react'
import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'
import SportsSection from '../components/SportsSection'

const Home = () => {
  return (
  <div className="">
    <Hero/> 
    <NewsSection/>
    <SportsSection/>
  </div>
  )
}

export default Home
