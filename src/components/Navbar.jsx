import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // optional: you can replace with your icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects +" },
    { path: "/aboutus", label: "About Us" },
    { path: "/contactus", label: "Contact Us" },
  ];

  return (
    <header className="bg-white px-4 md:px-8 py-4 text-black shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/content/Layer_11_copy.png"
            alt="Logo"
            className="h-12"
          />
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hidden md:flex items-center space-x-8 text-lg"
        >
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold"
                  : "text-blue-400 hover:text-black"
              }
              end={path === "/home"}
            >
              {label}
            </NavLink>
          ))}
        </motion.nav>

        {/* Get Started button for desktop */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="hidden md:flex"
        >
          <NavLink
            to="/contactus"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-blue-400 hover:scale-90 transition-transform"
          >
            Get Started
          </NavLink>
        </motion.div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden z-20"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:hidden mt-4 bg-white rounded-lg shadow-md px-6 py-4 space-y-4 text-center"
        >
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-black font-semibold"
                  : "block text-blue-400 hover:text-black"
              }
              end={path === "/home"}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contactus"
            onClick={() => setIsMenuOpen(false)}
            className="block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-blue-400 mt-2"
          >
            Get Started
          </NavLink>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
