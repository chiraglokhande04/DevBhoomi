import React from "react";
import ElevatorHero from "../components/ElevatorHero"; // Import ElevatorHero
import AboutCompany from "../components/AboutCompany";
import Services from "../components/Services";
import ExperiencePage from "../components/ExperienceTrust";
import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    < >
      <ElevatorHero />
              <AboutCompany />
              <Services/> 
              <ExperiencePage/>
              <TeamSection/>
              <Testimonials/>
              <Clients/>
              <FAQ/>
              <ContactForm/>
              <Footer/>
    </>
  );
};

export default Home;
