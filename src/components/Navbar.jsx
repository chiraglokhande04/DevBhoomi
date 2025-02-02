import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center rounded-lg bg-white px-8 py-4  text-black w-auto mx-44 my-4">
      {/* Logo Section (Left to Right) */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center space-x-3"
      >
        <img src="https://devbhoomielevator.com/wp-content/uploads/2024/03/Layer_11_copy.png" alt="Logo" className="h-12" />
      </motion.div>

      {/* Navigation Links (Bottom to Top) */}
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex items-center space-x-8 text-lg"
      >
        {["/home", "/services", "/projects", "/aboutus", "/contactus"].map((path, index) => {
          const labels = ["Home", "Services", "Projects +", "About Us", "Contact Us"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold" // Active link style
                  : "text-blue-400 hover:text-black"
              }
              end={path === "/home"}
            >
              {labels[index]}
            </NavLink>
          );
        })}
      </motion.nav>

      {/* Get Started Button (Right to Left) */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="flex items-center space-x-6"
      >
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            
            "bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-blue-400 hover:scale-90"
          }
        >
          Get Started
        </NavLink>
      </motion.div>
    </header>
  );
};

export default Navbar;
