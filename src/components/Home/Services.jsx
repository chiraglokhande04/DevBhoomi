import React, { useEffect } from "react";
import { MdOutlineMiscellaneousServices, MdHealthAndSafety } from "react-icons/md";
import { GiElevator } from "react-icons/gi";
import { FaRegHandshake, FaHandHoldingUsd } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import FlipCard from "./Flipcard";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { title: "Smart Service Setup", description: "Periodical preventive Maintenance by Highly Trained Field Technicians and quicker customer response", icon: <MdOutlineMiscellaneousServices /> },
    { title: "Modernisation Of Elevators", description: "Boost your elevator’s reliability, comfort, and appearance and bring it in line with the latest safety.", icon: <GiElevator /> },
    { title: "Varied Service Centers", description: "Genuine parts from our service centers, stores for our AMC customers. We believe in quality.", icon: <FaRegHandshake />},
    { title: "Hassle Free Installation", description: "We make sure everything is in place for a smooth, trouble-free elevator installation process.", icon: <GrInstallOption /> },
    { title: "100% hassle free service plan", description: "Multiple and varied options for annual maintenance and service. We provide an Annual Maintenance Contract", icon: <FaHandHoldingUsd />},
    { title: "Rescue & Safety Drills", description: "To ensure safe, effective rescue of trapped personnel from elevator we train our personnel for such situations.", icon: <MdHealthAndSafety />},
  ];

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen flex flex-col items-center">
      <h2 
        className="text-xl font-semibold text-blue-500 mb-2"
        data-aos="fade-up"
      >
        OUR SERVICES
      </h2>

      <div
        className="max-w-6xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-4xl font-bold mb-4">
          Explore Our Range of Elevator Solutions
        </h3>
        <p className="text-gray-300 mb-8">
          In addition to exceptional elevator installation services, we offer
          comprehensive maintenance, repair, modernization, and support
          solutions tailored to meet your specific needs.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {services.map((service, index) => (
          <FlipCard service={service} index={index} key={index} data-aos="zoom-in" data-aos-delay={index * 100} />
        ))}
      </div>

      <Link to='/services'>
        <button
          className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Know More
        </button>
      </Link> 
    </div>
  );
};

export default Services;
