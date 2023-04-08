import React from 'react'
import FeatureProduct from '../FeatureProduct'
import Services from './belowHome/Services'
import HeroSection from './common/HeroSection'

const Home = () => {
  
  return (
    <>
      <HeroSection h1='Ecomerice Home page'/>
      <FeatureProduct/>
      <Services/>
    </>
  )
}

export default Home
