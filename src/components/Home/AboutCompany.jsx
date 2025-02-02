import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const stepTime = (duration * 1000) / (to - from);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= to) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <span>{count}+</span>;
};

const AboutCompany = () => {
  return (
    <section className="bg-white py-16 min-h-[600px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-16 space-x-14">
        {/* Text Section */}
        <div className="lg:w-1/2">
          {/* "About Company" text: Top to Bottom */}
          <motion.h4
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-blue-500 uppercase text-sm font-bold mb-4"
          >
            About Company
          </motion.h4>

          {/* Main Text Section: Left to Right */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Devbhoomi Group - Your Trusted Partner in Elevators Solutions
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With a commitment to excellence and innovation, we specialize in
              providing high-quality elevators and comprehensive maintenance services across various sectors.
              Our dedication to quality, safety, and client satisfaction sets us apart as a leader in the industry.
            </p>

            <div className="flex items-center gap-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter from={10} to={25} duration={2} />
                </h3>
                <p className="text-gray-600 text-sm">Years of Experience</p>
              </div>
              <div className="border-l border-gray-300 h-16"></div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter from={600} to={1250} duration={2} />
                </h3>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* "Learn More" Button: Bottom to Top */}
          <Link to='/aboutus'>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-8 bg-blue-400 px-6 py-3 text-white rounded-lg hover:bg-gray-900 hover:scale-90"
          >
            Learn More
          </motion.button>
          </Link> 
        </div>

        {/* Image Section: Right to Left */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:w-3/7"
        >
          <img
            src="https://devbhoomielevator.com/wp-content/uploads/2024/03/ABOUT-US-1-copy-768x768.webp"
            alt="Elevator Building"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
