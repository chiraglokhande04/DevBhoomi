import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center rounded-lg bg-white px-8 py-4 bg-gray-800 text-black w-auto mx-44 my-4">
      {/* Logo Section (Left to Right) */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center space-x-3"
      >
        <img src="/path-to-logo.png" alt="Logo" className="h-12" />
        <h1 className="text-lg font-bold">DEVBHOOMI ELEVATORS</h1>
      </motion.div>

      {/* Navigation Links (Bottom to Top) */}
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex items-center space-x-14 text-lg"
      >
        <NavLink to="/Home" className="hover:text-blue-400" end>
          Home
        </NavLink>
        <NavLink to="/Aboutus" className="hover:text-blue-400">
          About
        </NavLink>
        <NavLink to="/Services" className="hover:text-blue-400">
          Services
        </NavLink>
        <NavLink to="/Contactus" className="hover:text-blue-400 text-lg">
          Contact Us
        </NavLink>
      </motion.nav>

      {/* Get Started Button (Right to Left) */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="flex items-center space-x-6"
      >
        <NavLink to="/get-started" className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-blue-400 hover:scale-90">
          Get Started
        </NavLink>
      </motion.div>
    </header>
  );
};

export default Navbar;
