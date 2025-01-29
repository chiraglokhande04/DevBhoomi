import React from 'react'
import Reasons from '../components/About/Reasons'
import ElevatorHero from '../components/ElevatorHero'
import ElevatorInfoComponent from '../components/About/ElevatorInfoComponent'
import ElevatorComponent from '../components/About/ElevatorComponent'
import LatestDesignsSlider from '../components/About/LatestDesignSlider'
import Footer from '../components/Footer'

const Aboutus = () => {
  return (
    <div>
      <ElevatorHero/>
      <Reasons/>
      <ElevatorInfoComponent/>
      <ElevatorComponent/>
      <LatestDesignsSlider/>
      <Footer/>
    </div>
  )
}

export default Aboutus
