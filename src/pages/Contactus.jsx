import React from 'react'
import ContactForm from '../components/ContactUs/ContactForm'
import MapComponent from '../components/ContactUs/MapComponent'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactUs/ContactHero'

const Contactus = () => {
  return (
    <div>
      <ContactHero/>
      <ContactForm/>
      <MapComponent/>
      <Footer/>
    </div>
  )
}

export default Contactus
