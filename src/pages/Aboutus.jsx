import React from 'react'
import Reasons from '../components/About/Reasons'

import ElevatorInfoComponent from '../components/About/ElevatorInfoComponent'
import ElevatorComponent from '../components/About/ElevatorComponent'
import LatestDesignsSlider from '../components/About/LatestDesignSlider'
import Footer from '../components/Footer'
import AboutHero from '../components/About/AboutHero'

const Aboutus = () => {
  return (
    <div>
      <AboutHero/>
      <Reasons/>
      <ElevatorInfoComponent/>
      <ElevatorComponent/>
      <LatestDesignsSlider/>
      <Footer/>
    </div>
  )
}

export default Aboutus
