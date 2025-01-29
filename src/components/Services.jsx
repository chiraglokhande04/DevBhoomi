import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { title: "Smart Service Setup", description: "", icon: "⚙️" },
    { title: "Modernisation Of Elevators", description: "", icon: "🏗️" },
    { title: "Varied Service Centers", description: "", icon: "📍" },
    { title: "Hassle Free Installation", description: "", icon: "🔧" },
    { title: "100% hassle free service plan", description: "", icon: "✅" },
    { title: "Rescue & Safety Drills", description: "", icon: "🚑" },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen flex flex-col items-center">

      <motion.h2 className="text-xl font-semibold text-blue-500 mb-2">OUR SERVICES</motion.h2>

      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <h3 className="text-4xl font-bold mb-4">
          Explore Our Range of Elevator Solutions
        </h3>
        <p className="text-gray-300 mb-8">
          In addition to exceptional elevator installation services, we offer
          comprehensive maintenance, repair, modernization, and support
          solutions tailored to meet your specific needs.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-white text-black"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
            <p className="text-sm">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Know More
      </motion.button>
    </div>
  );
};

export default Services;