import React from 'react'
import MaintenanceProjects from '../components/Projects/MaintenenceProjects'
import InstallationProjects from '../components/Projects/InstallationProjects'
import LatestDesignsSlider from '../components/About/LatestDesignSlider'
import Footer from '../components/Footer'

import ProjectsHero from '../components/Projects/ProjectsHero'

const Projects = () => {
  return (
    <div>
       <ProjectsHero/>
        <MaintenanceProjects/>
        <InstallationProjects/>
        <LatestDesignsSlider/>
        <Footer/>
    </div>
  )
}

export default Projects