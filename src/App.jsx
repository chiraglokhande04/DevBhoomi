import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";

import StartPage from "./pages/StartPage";
import ServicesPage from "./pages/ServicesPage";
import Projects from "./pages/Projects";
// import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<StartPage/>} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
