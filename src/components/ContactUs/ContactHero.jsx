import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { TbMailOpened } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactHero = () => {
  return (
    <div className="bg-gray-900 text-white h-[500px]  "
      style={{
        backgroundImage: "url('/content/2-copy.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
      }}>
      {/* Top Bar */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-36 flex justify-between items-center px-6 py-6 text-sm"
      >
        <div className="flex gap-x-2">
          <TbMailOpened className="text-blue-400 text-xl" />
          <a href="mailto:info@devbhoomielevator.com" className="text-white hover:text-blue-400">
            info@devbhoomielevator.com
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex gap-x-2 items-center">
            <FaPhoneAlt className="text-blue-400 text-md" />
            <a href="tel:+919717686390" className="hover:underline">
              +91 97176 86390
            </a>
          </div>

          <div className="flex gap-x-2 items-center">
            <Link to="#" className="bg-blue-400 p-2 rounded-full hover:bg-white hover:text-blue-400">
              <FaFacebookF />
            </Link>
            <Link to="#" className="bg-blue-400 p-2 rounded-full hover:bg-white hover:text-blue-400">
              <FaInstagram />
            </Link>
            <Link to="#" className="bg-blue-400 p-2 rounded-full hover:bg-white hover:text-blue-400">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </motion.div>

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 bg-cover bg-center h-[500px]">
      {/* h4: Top to Bottom Animation */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-5xl mb-60"
      >
        Contact Us
      </motion.h1>

     
    </section>
    </div>
  );
};

export default ContactHero;
