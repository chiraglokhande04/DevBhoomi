import React from 'react';
import ElevatorHero from '../components/Home/ElevatorHero';
import ServicesHero from '../components/Services/ServicesHero';

export default function ServicesPage() {
  const services = [
    {
      title: "Smart Service Setup",
      description: "Our smart service setup includes periodical preventive maintenance conducted by highly trained field technicians. We prioritize proactive maintenance to prevent potential issues & ensure the smooth operation of your elevators.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image
      buttonText: "Get Now",
    },
    {
      title: "Hassle-Free Installation",
      description: "Our expert team oversees every aspect of the installation process to ensure a seamless and trouble-free experience for our clients. From planning and logistics to execution, we take care of everything to guarantee a hassle-free installation of your elevators.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image
      buttonText: "Get Now",
    },
    {
      title: "Varied Service Centers",
      description: "We maintain dedicated service centres stocked with genuine parts to cater to the needs of our Annual Maintenance Contract (AMC) customers. Quality is paramount to us, and we ensure that only authentic parts are used in servicing and maintenance activities.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image
      buttonText: "Get Now",
    },
     {
      title: "Modernization Of Elevators",
      description: "Elevator technology evolves rapidly, & modernization is key to keeping your elevators reliable & safe. Our modernization services aim to upgrade your elevator's components to enhance its reliability, comfort, & appearance, while also ensuring compliance with the latest safety standards.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image
      buttonText: "Get Now",
    },
    {
      title: "100% Hassle-Free Service Plan",
      description: "We offer multiple options for annual maintenance and service plans tailored to meet your specific requirements. Our Annual Maintenance Contracts provide comprehensive coverage, giving you peace of mind and ensuring the longevity and efficiency of your elevator systems.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image
      buttonText: "Get Now",
    },
    {
      title: "Rescue & Safety Drills",
      description: "Safety is our top priority, and we conduct regular training drills to prepare our personnel for emergency situations, such as rescuing trapped individuals from elevators. Our rigorous training ensures that our team is equipped to handle any unforeseen circumstances effectively and safely.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image
      buttonText: "Get Now",
    },
  ];

  return (
    <>
    <ServicesHero/>
    <div className="min-h-screen bg-gray-50 p-14">
      <div className="text-center mb-10 ">
        <h1 className="text-3xl font-bold text-gray-800">DEVBHOOMI Exceptional Elevator Services</h1>
        <p className="mt-4 text-gray-600">
          At DEVBHOOMI, we are committed to delivering exceptional service and ensuring the optimal performance and safety of your elevator systems. Contact us today to learn more about our services and how we can assist you with your elevator maintenance and modernization needs.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 px-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-400 rounded-2xl shadow-lg border-2 border-black  text-center">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-50% object-cover rounded-t-xl mb-4"
            />
            <div className='p-6'>
            <h2 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h2>
            <p className="text-white mb-4">{service.description}</p>
            <button className=" border-3 border-white text-white px-4 py-2 rounded-full hover:bg-black">
              {service.buttonText}
            </button>

            </div>
           
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

