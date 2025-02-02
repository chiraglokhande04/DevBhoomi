import React from "react";
import ElevatorHero from "../components/Home/ElevatorHero"; // Import ElevatorHero
import AboutCompany from "../components/Home/AboutCompany";
import Services from "../components/Home/Services";
import ExperiencePage from "../components/Home/ExperienceTrust";
import TeamSection from "../components/Home/TeamSection";
import  { TestimonialSlider } from "../components/Home/Testimonials";
import Clients from "../components/Home/Clients";
import FAQ from "../components/Home/FAQ";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    < >
      <ElevatorHero />
              <AboutCompany />
              <Services/> 
              <ExperiencePage/>
              <TeamSection/>
              <TestimonialSlider/>
              <Clients/>
              <FAQ/>
              <ContactForm/>
              <Footer/>
    </>
  );
};

export default Home;
