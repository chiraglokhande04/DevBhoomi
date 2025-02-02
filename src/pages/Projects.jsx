import React from 'react'
import MaintenanceProjects from '../components/Projects/MaintenenceProjects'
import InstallationProjects from '../components/Projects/InstallationProjects'
import LatestDesignsSlider from '../components/About/LatestDesignSlider'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ElevatorHero from '../components/ElevatorHero'

const Projects = () => {
  return (
    <div>
       <ElevatorHero/>
        <MaintenanceProjects/>
        <InstallationProjects/>
        <LatestDesignsSlider/>
        <Footer/>
    </div>
  )
}

export default Projects