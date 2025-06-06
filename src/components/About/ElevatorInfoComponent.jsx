import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ElevatorInfoComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Animation triggers once when element is in view
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white py-20 px-5 md:px-20 gap-x-5 ">
      {/* Image Section */}
      <div
        className="w-full max-w-lg md:w-1/2 flex justify-center mb-8 md:mb-0"
        data-aos="fade-right" // Add AOS fade-right animation
      >
        <img
          src="/content/Quality-and-Excellence-in-Elevator-Solutions.webp" 
          alt="Elevator Presentation"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Text Content Section */}
      <div
        className="w-full md:w-1/2"
        data-aos="fade-left" // Add AOS fade-left animation for text content
      >
        <h1 className="text-xl md:text-4xl font-bold mb-4">
          High-Quality Elevators and Comprehensive Maintenance Services
        </h1>
        <p className="text-xs md:text-lg mb-6 leading-relaxed">
          We at Devbhoomi Group are committed to preserving the essence of real places through our top-notch elevators
          installed in various settings such as Government Projects, Public Places, Hospitals, Hotels, and Residential
          Societies. Specializing in trading and supplying a range of elevators including Passenger Elevators, Hospital
          Elevators, Commercial Elevators, Car Elevators, Freight Elevators, and Dumbwaiters, we ensure optimal quality
          by utilizing premium components and trusted motors under the name of DEVBHOOMI group.
        </p>
      </div>
    </div>
  );
};

export default ElevatorInfoComponent;
